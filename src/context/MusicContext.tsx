import { createContext, useContext, useRef, useState } from "react";

interface MusicContextType {
  isPlaying: boolean;
  playMusic: () => void;
  pauseMusic: () => void;
  toggleMusic: () => void;
}

const MusicContext = createContext<MusicContextType | null>(null);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const initAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/boda.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
    }
  };

  const playMusic = () => {
    initAudio();
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    isPlaying ? pauseMusic() : playMusic();
  };

  return (
    <MusicContext.Provider
      value={{ isPlaying, playMusic, pauseMusic, toggleMusic }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used inside MusicProvider");
  }
  return context;
};
