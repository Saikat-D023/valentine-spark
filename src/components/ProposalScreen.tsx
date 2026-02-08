import { motion } from "framer-motion";
import DodgeButton from "./DodgeButton";
import FloatingHearts from "./FloatingHearts";

interface Props {
  onYes: () => void;
}

const ProposalScreen = ({ onYes }: Props) => (
  <div className="relative min-h-screen valentine-gradient flex flex-col items-center justify-center overflow-hidden px-4">
    <FloatingHearts />

    <motion.div
      className="relative z-10 flex flex-col items-center gap-6"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Cat GIF placeholder */}
      <motion.div
        className="w-52 h-52 rounded-3xl bg-card shadow-xl border-4 border-valentine-pink flex items-center justify-center overflow-hidden"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/Puss In Boots Please GIF.gif"
          alt="Please Cat"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Proposal text */}
      <motion.h1
        className="font-script text-4xl md:text-5xl lg:text-6xl text-valentine-deep text-center leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Aranya, will you be my Valentine? 💕
      </motion.h1>

      <motion.p
        className="text-muted-foreground text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Choose wisely... 😉
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col items-center gap-6 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          onClick={onYes}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-primary px-10 py-4 text-xl font-bold text-primary-foreground shadow-lg animate-pulse-glow cursor-pointer"
        >
          Yes! 💖
        </motion.button>

        <DodgeButton />
      </motion.div>
    </motion.div>
  </div>
);

export default ProposalScreen;
