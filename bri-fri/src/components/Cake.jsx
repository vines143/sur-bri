import { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import "./Cake.css";

export default function Cake({ onNext }) {
  const [blown, setBlown] = useState(false);

  return (
    <div className="cake-page">
      {blown && (
        <Confetti
          recycle={false}
          numberOfPieces={400}
        />
      )}

      <motion.h1
        initial={{ y: -60 }}
        animate={{ y: 0 }}
      >
        🎂 Happy Birthday ❤️
      </motion.h1>

      <p>Make a Wish and blow out the candles!</p>

      <div className="cake">

        <div
          className="candles"
          onClick={() => setBlown(true)}
        >
          {!blown ? (
            <>
              <div className="candle">
                <div className="flame"></div>
              </div>

              <div className="candle">
                <div className="flame"></div>
              </div>

              <div className="candle">
                <div className="flame"></div>
              </div>
            </>
          ) : (
            <>
              <div className="candle"></div>
              <div className="candle"></div>
              <div className="candle"></div>
            </>
          )}
        </div>

        <div className="cake-top"></div>

        <div className="cake-bottom"></div>

      </div>

      {blown && (
        <>
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            🎉 Yay!! Your wish is on its way ❤️
          </motion.h2>

          <button onClick={onNext}>
            Final Surprise 🎁
          </button>
        </>
      )}
    </div>
  );
}