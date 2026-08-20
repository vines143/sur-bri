import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./FinalSurprise.css";

export default function FinalSurprise() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="final-page">
      {opened && (
        <Confetti
          recycle={true}
          numberOfPieces={300}
        />
      )}

      {!opened ? (
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
       <motion.div
  className="message"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1 }}
>
  <div className="hearts">
    <span>❤️</span>
    <span>💖</span>
    <span>✨</span>
    <span>🌸</span>
    <span>💝</span>
  </div>

<h1>🎉 Happy Birthday Akka! ❤️</h1>

<p>
  Joog joog jiyoo aur hamesha khushh raaho,
  <br />
  abaad raho!! 🤗
  <br />
  <br />
  You are the one I shared everything with
  <br />
  without any hesitation.
  <br />
  You taught me like my own sister.
  <br />
  <br />
  Thank you so much for all
  <br />
  the wonderful memories with me!!! ❤️
  <br />
  <br />
  Mile jabhi bahen se,
  <br />
  bhool jaunga saara zamana,
  <br />
  abaad rahe meri bahen
  <br />
  aur abaad rahe uska gharana!! 🥰
  <br />
  <br />
  Fursat nahi hai, waqt nahi hai
  <br />
  ke aake manaoon bahen ka salgirana,
  <br />
  lekin jab bhi aaun milne tujhse,
  <br />
  wo din bane mere liye
  <br />
  Dilwali Dussehra jaisa tyohaar haan!! ❤️
  <br />
  <br />
  Once again, wishing you
  <br />
  many many happy returns of the day! 🎉🎂🎈🥳🥁
  <br />
  <br />
  Happy Birthday Akka! 🥳🥰🥰🥰❤️
  <br />
  <br />
  Stay happy, stay blessed
  <br />
  and keep smiling forever! ❤️
</p>

  <h2>Best Wishes 💕</h2>
</motion.div>
      )}
    </div>
  );
}