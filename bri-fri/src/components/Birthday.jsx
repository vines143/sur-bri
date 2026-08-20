import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import "./Birthday.css";

export default function Birthday({ onNext }) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const musicRef = useRef(null);

  useEffect(() => {
    const resize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resize);

    if (musicRef.current) {
      musicRef.current.play().catch(() => {
        console.log("Autoplay blocked until user interaction.");
      });
    }

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="birthday-container">
      <Confetti width={size.width} height={size.height} />

      <audio ref={musicRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {/* Floating Balloons */}
      <div className="balloons">
        <div className="balloon red"></div>
        <div className="balloon blue"></div>
        <div className="balloon yellow"></div>
        <div className="balloon pink"></div>
        <div className="balloon green"></div>
      </div>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        🎉 Happy Birthday 🎉
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
         SURABHI JOSHI  
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Happy Birthday, Surabhi! 🎂🥳💖 Wishing you a day filled with happiness, laughter, love, and everything you deserve. I’m really happy to have a wonderful friend like you in my life. May this new year bring you lots of success, beautiful moments, and all your heart’s wishes. Keep smiling and stay amazing always! ❤️✨ Happy Birthday once again, Surabhi! 🎉🎁
.
      </motion.p>

      {/* <button className="next-btn" onClick={onNext}>
        Continue ❤️
      </button> */}

      <button
  className="next-btn"
  onClick={() => {
    console.log("Button clicked");
    onNext();
  }}
>
  Continue ❤️
</button>
    </div>
  );
}