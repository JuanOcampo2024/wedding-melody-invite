import { motion } from "framer-motion";
import { MapPin, Clock, Shirt, Gift } from "lucide-react";

const events = [
  {
    icon: Clock,
    title: "Ceremonia",
    details: ["Sábado 6 de Junio, 2026", "5:00 PM"],
    location: "Capilla Niño Jesús de Praga",
    address: "Vereda Pontezuela ",
    mapsUrl: "https://maps.app.goo.gl/3tf9auA2B7eSTWYy6",
  },
  {
    icon: MapPin,
    title: "Recepción",
    details: ["Sábado 6 de Junio, 2026", "7:00 PM"],
    location: "Imperial Eventos Deluxe",
    address: "Galicia,Rionegro",
    mapsUrl: "https://maps.app.goo.gl/nQ7dn1cKRyU3q8R3A",
  },
  {
    icon: Shirt,
    title: "Dresscode",
    details: ["Formal", "Colores: Tonos neutros"],
    location: "",
    address: "Evitar color blanco",
    mapsUrl: "",
  },
  {
    icon: Gift,
    title: "",
    details: [""],
    location: "LLuvia de sobres",
    address: "",
    mapsUrl: "",
  },
];

const EventInfo = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-script text-5xl text-primary mb-3">Detalles del Evento</p>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-primary/30" />
          <div className="w-2 h-2 rotate-45 bg-primary/50" />
          <div className="h-px w-20 bg-primary/30" />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="ornament-border p-8 bg-card text-center"
          >
            <event.icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl text-foreground mb-4 tracking-wider">
              {event.title}
            </h3>
            {event.details.map((d, j) => (
              <p key={j} className="font-body text-muted-foreground text-lg">
                {d}
              </p>
            ))}
            {event.location && (
              <p className="font-display text-foreground mt-4 text-lg">{event.location}</p>
            )}
            {event.address && (
              <p className="font-body text-muted-foreground text-sm mt-1">{event.address}</p>
            )}
            {event.mapsUrl && (
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 border border-primary/40 text-primary font-body text-sm tracking-widest uppercase hover:bg-primary/10 transition-colors"
              >
                {event.title === "Mesa de Regalos" ? "Ver mesa" : "Ver en Maps"}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventInfo;
