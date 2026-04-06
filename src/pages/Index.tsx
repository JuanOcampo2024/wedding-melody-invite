import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CoverSection from "@/components/wedding/CoverSection";
import PhotoSparkles from "@/components/wedding/PhotoSparkles";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import GuestMessage from "@/components/wedding/GuestMessage";
import EventInfo from "@/components/wedding/EventInfo";
import Countdown from "@/components/wedding/Countdown";
import RsvpForm from "@/components/wedding/RsvpForm";
import PhotoGalleryFoot from "@/components/wedding/PhotoGalleryFoot";
import Footer from "@/components/wedding/Footer";
import GalleryQR from "@/components/wedding/GalleryQR";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    // Try playing audio — user interaction satisfies autoplay policy
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Browser may still block; that's OK
      });
    }
  };

  return (
    <div
  className="min-h-screen"
    
  style={{
    background: `
      radial-gradient(circle at top, #f8f3eb, #e9dcc6),
      linear-gradient(180deg, #f5efe6 0%, #ede4d3 100%)`,
  }}
>
   <PhotoSparkles />
      {/* Audio element — user replaces src with their MP3 */}
      <audio ref={audioRef} loop preload="auto">
        {/* Replace the src below with your MP3 file URL */}
        <source src="/wedding-music.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {!isOpen && <CoverSection onOpen={handleOpen} />}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <PhotoGallery position="top" />
          <GuestMessage/>
          <EventInfo />
          <Countdown />
          <RsvpForm />
          <GalleryQR/>
          <PhotoGalleryFoot/>
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
