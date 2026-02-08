import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const fireConfetti = () => {
  const end = Date.now() + 3000;
  const colors = ["#e11d73", "#ff6b9d", "#ff85b3", "#ffd700", "#ff1493"];

  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();

  // Heart burst
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.5 },
    colors,
    shapes: ["circle"],
    scalar: 1.4,
  });
};

const sparkles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: Math.cos((i / 8) * Math.PI * 2) * 140,
  y: Math.sin((i / 8) * Math.PI * 2) * 140,
  delay: i * 0.15,
}));

const CelebrationScreen = () => {
  useEffect(() => {
    const timer = setTimeout(fireConfetti, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen valentine-gradient flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Sparkles */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute text-valentine-gold text-2xl"
          style={{ left: "50%", top: "50%" }}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
            x: s.x,
            y: s.y,
          }}
          transition={{
            duration: 1.5,
            delay: s.delay + 0.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          ✨
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, duration: 0.8 }}
      >
        {/* Yaay text */}
        <motion.h1
          className="font-script text-6xl md:text-7xl lg:text-8xl text-valentine-deep"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Yaay! 🎉
        </motion.h1>

        {/* Cat GIF placeholder */}
        <motion.div
          className="w-56 h-56 rounded-3xl bg-card shadow-2xl border-4 border-valentine-pink flex items-center justify-center overflow-hidden shimmer"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
        >
          <div className="text-center text-muted-foreground p-4">
            <p className="text-5xl mb-2">🐱</p>
            <p className="text-sm">Your cat GIF here!</p>
          </div>
        </motion.div>

        {/* Message */}
        <motion.p
          className="font-script text-2xl md:text-3xl text-valentine-deep text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          I knew you'd say yes! 💗
        </motion.p>

        <motion.div
          className="flex gap-2 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {["💕", "🥰", "💖", "😻", "💝"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, delay: i * 0.15, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CelebrationScreen;
