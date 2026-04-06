import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

const PhotoSparkles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
      {particles.map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              background: "radial-gradient(circle, #e6c78b, transparent)",
              boxShadow: "0 0 8px #e6c78b",
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y:"120%", 
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
};

export default PhotoSparkles;