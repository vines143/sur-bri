import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Letter.css";

const message = `Dear Surabhi ❤️,

Happy Birthday! 🎉🎂 Wishing you endless happiness, good health, success, and beautiful moments. I’m truly grateful for our friendship, conversations, smiles, and memories. Keep smiling and stay happy always. You deserve the very best in life. May all your dreams come true and your year be amazing! ❤️

Best wishes
`;

export default function Letter({ onNext }) {
  const [opened, setOpened] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!opened) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(message.slice(0, index));
      index++;

      if (index > message.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [opened]);

  return (
    <div className="letter-page">
      {!opened ? (
        <motion.div
          className="envelope"
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpened(true)}
        >
          <div className="flap"></div>
          <div className="body"></div>

          <p>💌 Click to Open</p>
        </motion.div>
      ) : (
        <motion.div
          className="letter-card"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <pre>{displayText}</pre>

          {displayText.length === message.length && (
            <button onClick={onNext}>
              Continue 🎂
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}