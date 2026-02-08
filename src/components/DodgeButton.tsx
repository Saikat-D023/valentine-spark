import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const DodgeButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const dodge = useCallback(() => {
    // Calculate movement relative to the viewport size to make it "dodgey" and potentially go off-screen
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    // Generate a random position that can be anywhere, even off-screen by a bit
    const newX = (Math.random() - 0.5) * maxX * 1.5;
    const newY = (Math.random() - 0.5) * maxY * 1.5;

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
