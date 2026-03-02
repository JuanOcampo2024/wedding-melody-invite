import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useMusic } from "@/context/MusicContext";

const MusicFloatingButton = () => {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <motion.button
      onClick={toggleMusic}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed
        right-4
        bottom-4      /* ⬅ aquí lo movimos abajo */
        z-50
        w-12 h-12
        rounded-full
        bg-primary
        text-white
        flex items-center justify-center
        shadow-lg
      "
      aria-label="Control música"
    >
      {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
    </motion.button>
  );
};

export default MusicFloatingButton;
