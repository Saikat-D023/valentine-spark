import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const DodgeButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const dodge = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const maxX = rect.width - 120;
    const maxY = rect.height - 50;

    const newX = (Math.random() - 0.5) * maxX;
    const newY = (Math.random() - 0.5) * maxY;

    setPosition({ x: newX, y: newY });
  }, []);

  return (
    <div ref={containerRef} className="relative h-20 w-64 flex items-center justify-center">
      <motion.button
        ref={buttonRef}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onMouseEnter={dodge}
        onTouchStart={dodge}
        className="absolute rounded-full bg-secondary px-8 py-3 font-semibold text-secondary-foreground shadow-md hover:shadow-lg transition-shadow text-lg cursor-pointer select-none"
      >
        Umm... 🤔
      </motion.button>
    </div>
  );
};

export default DodgeButton;
