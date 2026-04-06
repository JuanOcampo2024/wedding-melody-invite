import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_DATE = new Date("2026-06-06T00:01:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculate(): TimeLeft {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const FlipNumber = ({ value }: { value: number }) => {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute font-display text-2xl sm:text-4xl text-[#2b2b2b]"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculate());
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculate();
      setTimeLeft(newTime);
      
      // Verificar si llegó a cero
      if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
        setIsFinished(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Si ya terminó, mostrar mensaje de celebración
  if (isFinished) {
    return (
      <section
        className="py-20 px-4"
        style={{
          background: "linear-gradient(180deg, #c47a5a, #a65f45)",
        }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            
            <p className="text-white/90 text-lg sm:text-xl font-medium tracking-wide">
              ✦ ¡Hoy es nuestro gran día! ✦
            </p>
          </motion.div>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-20 bg-white/40" />
            <span className="text-white text-2xl">6 · Junio · 2026</span>
            <div className="h-px w-20 bg-white/40" />
          </div>
        </div>
      </section>
    );
  }

  const units = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #c47a5a, #a65f45)",
      }}
    >
      {/* TITULO */}
      <div className="text-center mb-12">
        <p className="font-script text-5xl text-white mb-2">
          Faltan
        </p>

        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-white/40" />
          <span className="text-white text-sm">❤</span>
          <div className="h-px w-20 bg-white/40" />
        </div>
      </div>

      {/* CONTADOR */}
      <div className="flex justify-center gap-4 sm:gap-8 max-w-lg mx-auto">
        {units.map((u, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* CAJA PREMIUM */}
            <div
              className="
                w-16 h-16 sm:w-24 sm:h-24
                rounded-xl
                backdrop-blur-md
                bg-white/30
                border border-white/40
                shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                flex items-center justify-center
              "
            >
              <FlipNumber value={u.value} />
            </div>

            {/* LABEL */}
            <p className="text-white/90 text-xs sm:text-sm mt-3 tracking-widest uppercase">
              {u.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
