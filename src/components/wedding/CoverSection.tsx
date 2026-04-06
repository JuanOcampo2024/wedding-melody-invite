import { motion } from "framer-motion";
import { useMusic } from "@/context/MusicContext";

interface CoverSectionProps {
  onOpen: () => void;
}

const CoverSection = ({ onOpen }: CoverSectionProps) => {
  const { playMusic } = useMusic();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center overflow-hidden min-h-dvh"
      style={{
        backgroundImage: "url('/textures/cover.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* capa opcional para mejorar contraste */}
      <div className="absolute inset-0 bg-black/10" />

      <motion.button
   onClick={() => {
    playMusic(); // inicia música si no está sonando
    onOpen();
  }}
  whileHover={{
    scale: 1.08,
    boxShadow: "0px 0px 25px rgba(255,255,255,0.35)",
  }}
  transition={{ type: "spring", stiffness: 300 }}
  className="
    relative
    z-10
    mb-[5vh]
    px-24
    py-24
    text-transparent
    text-sm
    tracking-[0.2em]
    uppercase
    rounded-md
    transition-all
    duration-500
    translate-x-[6px]
    sm:translate-x-[8px]
    md:translate-x-[10px]
  "
>
  "Abrir invitacion"
</motion.button>
    </motion.div>
  );
};

export default CoverSection;