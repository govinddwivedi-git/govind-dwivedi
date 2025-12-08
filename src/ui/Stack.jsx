import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";

const Stack = forwardRef(({ cards, sendToBackOnClick = true }, ref) => {
  const [order, setOrder] = useState(cards.map((_, i) => i));
  const constraintsRef = useRef(null);

  const moveToEnd = (index) => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const movedItem = newOrder.splice(index, 1)[0];
      newOrder.unshift(movedItem);
      return newOrder;
    });
  };

  const next = () => {
    moveToEnd(order.length - 1);
  };

  const prev = () => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const movedItem = newOrder.shift();
      newOrder.push(movedItem);
      return newOrder;
    });
  };

  const goTo = (targetIndex) => {
    setOrder((prevOrder) => {
      // Find where the target card currently is in the order
      const currentPosition = prevOrder.indexOf(targetIndex);
      if (currentPosition === prevOrder.length - 1) return prevOrder; // Already on top
      
      const newOrder = [...prevOrder];
      const movedItem = newOrder.splice(currentPosition, 1)[0];
      newOrder.push(movedItem);
      return newOrder;
    });
  };

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    next,
    prev,
    goTo,
    getCurrentIndex: () => order[order.length - 1],
  }));

  return (
    <div 
      ref={constraintsRef}
      className="relative h-full w-full"
      style={{ perspective: "1500px" }}
    >
      <AnimatePresence>
        {order.map((originalIndex, index) => {
          const isTop = index === order.length - 1;
          const depth = order.length - 1 - index;
          
          return (
            <DraggableCard
              key={originalIndex}
              index={index}
              depth={depth}
              isTop={isTop}
              constraintsRef={constraintsRef}
              onSwipe={() => sendToBackOnClick && moveToEnd(index)}
            >
              {cards[originalIndex]}
            </DraggableCard>
          );
        })}
      </AnimatePresence>
    </div>
  );
});

Stack.displayName = "Stack";

const DraggableCard = ({ children, index, depth, isTop, constraintsRef, onSwipe }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring animations
  const springConfig = { stiffness: 500, damping: 30, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  // 3D rotation based on drag position
  const rotateX = useTransform(springY, [-200, 200], [15, -15]);
  const rotateY = useTransform(springX, [-200, 200], [-15, 15]);
  const rotateZ = useTransform(springX, [-200, 200], [-10, 10]);
  
  // Scale and shadow based on drag
  const scale = useTransform(
    [springX, springY],
    ([latestX, latestY]) => {
      const distance = Math.sqrt(latestX ** 2 + latestY ** 2);
      return isTop ? 1 + Math.min(distance * 0.0003, 0.05) : 1 - depth * 0.03;
    }
  );
  
  // Glow effect intensity
  const glowOpacity = useTransform(
    [springX, springY],
    ([latestX, latestY]) => {
      const distance = Math.sqrt(latestX ** 2 + latestY ** 2);
      return Math.min(distance * 0.003, 0.8);
    }
  );

  const handleDragEnd = (_, info) => {
    const threshold = 150;
    const velocity = Math.sqrt(info.velocity.x ** 2 + info.velocity.y ** 2);
    const offset = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    
    if (offset > threshold || velocity > 500) {
      onSwipe();
    }
    
    // Snap back
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="absolute inset-0 h-full w-full touch-none"
      style={{
        zIndex: index,
        x: isTop ? springX : depth * 4,
        y: isTop ? springY : depth * -15,
        rotateX: isTop ? rotateX : depth * 3,
        rotateY: isTop ? rotateY : 0,
        rotateZ: isTop ? rotateZ : (index % 2 === 0 ? -1 : 1) * depth * 1.5,
        scale,
        transformStyle: "preserve-3d",
        opacity: 1 - depth * 0.12,
      }}
      drag={isTop}
      dragConstraints={constraintsRef}
      dragElastic={0.15}
      onDragEnd={handleDragEnd}
      whileTap={isTop ? { cursor: "grabbing" } : {}}
    >
      {/* Dynamic glow effect */}
      {isTop && (
        <motion.div
          className="absolute -inset-4 rounded-[2rem] pointer-events-none"
          style={{
            opacity: glowOpacity,
            background: "radial-gradient(circle, rgba(234,179,8,0.4) 0%, rgba(251,191,36,0.3) 50%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      )}
      {/* Highlighted border for top card */}
      {isTop && (
        <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.5),inset_0_0_15px_rgba(234,179,8,0.1)]" />
      )}
      {children}
    </motion.div>
  );
};

export default Stack;