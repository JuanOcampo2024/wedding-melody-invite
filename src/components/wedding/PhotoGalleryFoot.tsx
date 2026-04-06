import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const photos = [
  "/photos/foto5.jpeg",
  "/photos/foto6.jpeg",
  "/photos/foto7.jpeg",
  "/photos/foto8.jpeg",
  "/photos/foto9.jpeg",
];

const PhotoGallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-0 pb-0 overflow-hidden">
      <div className="relative w-full max-w-4xl mx-auto h-[420px] sm:h-[520px] rounded-xl overflow-hidden shadow-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={photos[index]}
            src={photos[index]}
            alt="foto boda"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;
