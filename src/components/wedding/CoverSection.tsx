import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useMusic } from "@/context/MusicContext"; // ajusta la ruta si usas @/

interface CoverSectionProps {
  onOpen: () => void;
}

const CoverSection = ({ onOpen }: CoverSectionProps) => {
const { playMusic } = useMusic();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, hsl(30 10% 12%), hsl(30 10% 8%))",
      }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-primary/40" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-primary/40" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-primary/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-body text-primary/70 text-sm sm:text-lg tracking-[0.3em] uppercase mb-6"
        >
          Estás invitado a la boda de
        </motion.p>

        {/* ESTIBEN */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="
            font-script
            text-5xl sm:text-6xl md:text-7xl
            leading-normal
            gold-text
            pt-4 pb-2
          "
        >
          Estiben
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center gap-4 my-4"
        >
          <div className="h-px w-14 bg-primary/40" />
          <Heart className="w-5 h-5 text-primary/60" fill="currentColor" />
          <div className="h-px w-14 bg-primary/40" />
        </motion.div>

        {/* YULEIDY */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="
            font-script
            text-5xl sm:text-6xl md:text-7xl
            leading-normal
            gold-text
            pt-4 pb-2
            mb-4
          "
        >
          Yuleidy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-body text-primary/50 text-sm tracking-[0.2em] uppercase mb-10"
        >
          6 de Junio, 2026
        </motion.p>

        {/* BOTÓN */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px hsl(43 72% 45% / 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
  playMusic(); // ✅ inicia la música
  onOpen();    // abre la invitación
}}

          className="px-10 py-4 border border-primary/50 text-primary font-display text-sm tracking-[0.25em] uppercase hover:bg-primary/10 transition-all duration-500"
        >
          Abrir Invitación
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CoverSection;
