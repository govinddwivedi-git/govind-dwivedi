import { useState, useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";

const Stack = forwardRef(({ cards, sendToBackOnClick = true }, ref) => {
  const [order, setOrder] = useState(cards.map((_, i) => i));
  const [isMobile, setIsMobile] = useState(false);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      style={{ perspective: isMobile ? "1000px" : "1500px" }}
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
              isMobile={isMobile}
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

const DraggableCard = ({ children, index, depth, isTop, isMobile, constraintsRef, onSwipe }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Lighter spring config for mobile
  const springConfig = isMobile 
    ? { stiffness: 300, damping: 25, mass: 0.3 }
    : { stiffness: 500, damping: 30, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  // Reduced 3D rotation for mobile
  const rotateX = useTransform(springY, [-200, 200], isMobile ? [8, -8] : [15, -15]);
  const rotateY = useTransform(springX, [-200, 200], isMobile ? [-8, 8] : [-15, 15]);
  const rotateZ = useTransform(springX, [-200, 200], isMobile ? [-5, 5] : [-10, 10]);
  
  // Scale and shadow based on drag
  const scale = useTransform(
    [springX, springY],
    ([latestX, latestY]) => {
      const distance = Math.sqrt(latestX ** 2 + latestY ** 2);
      return isTop ? 1 + Math.min(distance * 0.0003, 0.05) : 1 - depth * (isMobile ? 0.04 : 0.03);
    }
  );
  
  // Glow effect intensity - disabled on mobile for performance
  const glowOpacity = useTransform(
    [springX, springY],
    ([latestX, latestY]) => {
      if (isMobile) return 0;
      const distance = Math.sqrt(latestX ** 2 + latestY ** 2);
      return Math.min(distance * 0.003, 0.8);
    }
  );

  const handleDragEnd = (_, info) => {
    const threshold = isMobile ? 80 : 150;
    const velocity = Math.sqrt(info.velocity.x ** 2 + info.velocity.y ** 2);
    const offset = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    
    if (offset > threshold || velocity > (isMobile ? 300 : 500)) {
      onSwipe();
    }
    
    // Snap back
    x.set(0);
    y.set(0);
  };

  // Mobile-specific static styles for non-top cards
  const mobileStaticStyles = isMobile && !isTop ? {
    x: depth * 3,
    y: depth * -10,
    rotateX: 0,
    rotateY: 0,
    rotateZ: (index % 2 === 0 ? -1 : 1) * depth,
    scale: 1 - depth * 0.04,
  } : {};

  return (
    <motion.div
      className="absolute inset-0 h-full w-full touch-none"
      style={{
        zIndex: index,
        x: isTop ? springX : (isMobile ? mobileStaticStyles.x : depth * 4),
        y: isTop ? springY : (isMobile ? mobileStaticStyles.y : depth * -15),
        rotateX: isTop ? rotateX : (isMobile ? 0 : depth * 3),
        rotateY: isTop ? rotateY : 0,
        rotateZ: isTop ? rotateZ : (isMobile ? mobileStaticStyles.rotateZ : (index % 2 === 0 ? -1 : 1) * depth * 1.5),
        scale: isMobile && !isTop ? mobileStaticStyles.scale : scale,
        transformStyle: "preserve-3d",
        opacity: 1 - depth * (isMobile ? 0.15 : 0.12),
        willChange: isTop ? "transform" : "auto",
      }}
      drag={isTop}
      dragConstraints={constraintsRef}
      dragElastic={isMobile ? 0.1 : 0.15}
      onDragEnd={handleDragEnd}
      whileTap={isTop ? { cursor: "grabbing" } : {}}
    >
      {/* Dynamic glow effect - only on desktop */}
      {isTop && !isMobile && (
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
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-yellow-400"
          style={{
            boxShadow: isMobile 
              ? "0 0 10px rgba(234,179,8,0.4)" 
              : "0 0 15px rgba(234,179,8,0.5), inset 0 0 15px rgba(234,179,8,0.1)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default Stack;