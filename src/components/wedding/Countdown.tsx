import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-06-06T20:00:00");

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

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isWeddingDay =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

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
        background:
          "linear-gradient(180deg, hsl(30 10% 12%), hsl(30 10% 8%))",
      }}
    >
      {isWeddingDay ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="font-script text-5xl sm:text-6xl text-primary mb-6">
          ¡Nos casamos hoy!
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-primary/30" />
            <div className="w-2 h-2 rotate-45 bg-primary/50" />
            <div className="h-px w-20 bg-primary/30" />
          </div>

          <p className="font-body text-primary/60 mt-6 tracking-widest uppercase text-sm">
            Gracias por acompañarnos en este día tan especial
          </p>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="font-script text-4xl text-primary mb-2">
              Faltan
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-primary/30" />
              <div className="w-2 h-2 rotate-45 bg-primary/50" />
              <div className="h-px w-20 bg-primary/30" />
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 sm:gap-8 max-w-lg mx-auto">
            {units.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="ornament-border w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center bg-background/5">
                  <span className="font-display text-2xl sm:text-4xl text-primary">
                    {String(u.value).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-body text-primary/60 text-xs sm:text-sm mt-2 tracking-widest uppercase">
                  {u.label}
                </p>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Countdown;