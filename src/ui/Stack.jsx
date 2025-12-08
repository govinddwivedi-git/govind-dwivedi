import { useState } from "react";
import { motion } from "framer-motion";

const Stack = ({ cards, sensitivity = 180, sendToBackOnClick = false, randomRotation = false }) => {
  const [order, setOrder] = useState(cards.map((_, i) => i));

  const moveToEnd = (index) => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const movedItem = newOrder.splice(index, 1)[0];
      newOrder.unshift(movedItem);
      return newOrder;
    });
  };

  return (
    <div className="relative h-full w-full">
      {order.map((originalIndex, index) => {
        const isTop = index === order.length - 1;
        return (
          <motion.div
            key={originalIndex}
            className="absolute inset-0 h-full w-full"
            style={{ zIndex: index }}
            animate={{
              scale: 1 - (order.length - 1 - index) * 0.04,
              y: (order.length - 1 - index) * -20,
              rotate: randomRotation ? (index % 2 === 0 ? -2 : 2) * (order.length - 1 - index) : 0
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > sensitivity / 2) {
                if (sendToBackOnClick) moveToEnd(index);
              }
            }}
            onClick={() => {
              if (isTop && sendToBackOnClick) moveToEnd(index);
            }}
          >
            {cards[originalIndex]}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Stack;