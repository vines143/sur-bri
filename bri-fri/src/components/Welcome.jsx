import { motion } from "framer-motion";
import "./Welcome.css";

export default function Welcome({ onStart }) {
  return (
    <div className="welcome-container">
      <motion.div
        className="welcome-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🎉 Happy Birthday 🎉
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Dear <span> CR</span> 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* I made something special just for you.
          <br />
          Click below to begin your birthday surprise! */}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="start-btn"
          onClick={onStart}
        >
          🎁 Open Your Surprise
        </motion.button>
      </motion.div>
    </div>
  );
}