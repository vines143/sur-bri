import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

const media = [
  { type: "image", src: "/photo21.jpg" },
  { type: "image", src: "/photo23.jpg" },
  { type: "image", src: "/photo25.jpg" },
  { type: "image", src: "/photo1.jpg" },
  { type: "image", src: "/photo2.jpg" },
  { type: "image", src: "/photo3.jpg" },
  { type: "image", src: "/photo4.jpg" },
  { type: "image", src: "/photo5.jpg" },
  { type: "image", src: "/photo6.jpg" },
  { type: "image", src: "/photo7.jpg" },
  { type: "image", src: "/photo9.jpg" },
  { type: "image", src: "/photo10.jpg" },
  { type: "image", src: "/photo11.jpg" },
  { type: "image", src: "/photo.jpg" },
  { type: "image", src: "/photo12.jpg" },
  { type: "image", src: "/photo13.jpg" },
  { type: "image", src: "/photo14.jpg" },
  { type: "image", src: "/photo15.jpg" },
  { type: "image", src: "/photo16.jpg" },
  { type: "image", src: "/photo17.jpg" },
  { type: "image", src: "/photo18.jpg" },
  { type: "image", src: "/photo19.jpg" },
  { type: "image", src: "/e.jpg" },
  { type: "image", src: "/s.jpg" },
  // { type: "video", src: "/birthday-video.mp4" },
  // { type: "video", src: "/birthday-video1.mp4" },
  // { type: "video", src: "/birthday-video2.mp4" },
];

export default function Gallery({ onNext }) {
  const [selected, setSelected] = useState(null);

  // Auto slideshow
  useEffect(() => {
    if (selected === null) return;

    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % media.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <div className="gallery">
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        📸 Our Memories 
      </motion.h1>

      <div className="grid">
       {media.map((item, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.05 }}
    className="card"
    onClick={() => setSelected(index)}
  >
    {item.type === "image" ? (
      <img src={item.src} alt="" />
    ) : (
      <video
        src={item.src}
        muted
        autoPlay
        loop
        playsInline
      />
    )}
  </motion.div>
))}
      </div>

      <button className="next-page" onClick={onNext}>
        Next ❤️
      </button>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="close"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>

            <button
              className="arrow left"
              onClick={() =>
                setSelected(
                  (selected - 1 + media.length) % media.length
                )
              }
            >
              ❮
            </button>

           {media[selected].type === "image" ? (
  <motion.img
    key={selected}
    src={media[selected].src}
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
  />
) : (
  <motion.video
    key={selected}
    src={media[selected].src}
    controls
    autoPlay
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
  />
)}

            <button
              className="arrow right"
              onClick={() =>
                setSelected((selected + 1) % media.length)
              }
            >
              ❯
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}