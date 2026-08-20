import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./FinalSurprise.css";

export default function FinalSurprise() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="final-page">
      {/* Confetti after opening */}
      {opened && (
        <Confetti
          recycle={true}
          numberOfPieces={300}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}

      {!opened ? (
        /* Gift Box */
        <motion.div
          className="gift-box"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpened(true)}
        >
          <div className="lid"></div>
          <div className="box"></div>

          <h2>🎁</h2>

          <p>Click Me</p>
        </motion.div>
      ) : (
        /* Birthday Message */
        <motion.div
          className="message"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Floating Hearts */}
          <div className="hearts">
            <span>❤️</span>
            <span>💖</span>
            <span>✨</span>
            <span>🌸</span>
            <span>💝</span>
          </div>

          <h1>🎉 Happy Birthday, Surabhi! ❤️</h1>

          <p>
            Today is all about celebrating the wonderful person you are! 🥳
            <br />
            <br />

            I hope your special day is filled with happiness, laughter,
            <br />
            love, and lots of beautiful moments to remember. ❤️
            <br />
            <br />

            May your life always be filled with happiness, peace, success,
            <br />
            and everything your heart wishes for.
            <br />

            May every dream you have come true,
            <br />
            and may you always have countless reasons to smile. ✨
            <br />
            <br />

            Thank you for being such a wonderful friend
            <br />
            and for all the amazing memories we've shared. 🥰
            <br />
            <br />

            Keep shining, keep smiling,
            <br />
            and always stay the amazing person you are. ❤️
            <br />
            <br />

            Wishing you a beautiful birthday
            <br />
            and a fantastic year ahead! 🎂🎉💐✨
            <br />
            <br />

            <strong>
              Happy Birthday once again, Surabhi! 🥳❤️
            </strong>
          </p>

          <h2>With lots of love ❤️</h2>
        </motion.div>
      )}
    </div>
  );
}