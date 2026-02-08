import { motion } from "framer-motion";

const hearts = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 4,
  size: 14 + Math.random() * 20,
  opacity: 0.15 + Math.random() * 0.25,
}));

const FloatingHearts = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {hearts.map((h) => (
      <motion.div
        key={h.id}
        className="absolute text-valentine-rose"
        style={{ left: `${h.x}%`, fontSize: h.size, opacity: h.opacity }}
        animate={{
          y: [0, -window.innerHeight - 100],
          rotate: [0, h.id % 2 === 0 ? 30 : -30, 0],
          x: [0, Math.sin(h.id) * 40, 0],
        }}
        transition={{
          duration: h.duration,
          delay: h.delay,
          repeat: Infinity,
          ease: "linear",
        }}
        initial={{ y: window.innerHeight + 50 }}
      >
        ♥
      </motion.div>
    ))}
  </div>
);

export default FloatingHearts;
