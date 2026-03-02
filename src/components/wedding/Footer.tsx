import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center" style={{ background: "linear-gradient(180deg, hsl(30 10% 12%), hsl(30 10% 8%))" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-script text-4xl text-primary mb-4">Estiben  &  Yuleidy</p>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-primary/30" />
          <Heart className="w-4 h-4 text-primary/50" fill="currentColor" />
          <div className="h-px w-12 bg-primary/30" />
        </div>
        <p className="font-body text-primary/50 text-lg mb-2">
          Con amor, los esperamos para compartir este día tan especial
        </p>
        <p className="font-body text-primary/30 text-sm tracking-[0.3em] uppercase mt-6">
          #Estiben&Yuleidy2026
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
