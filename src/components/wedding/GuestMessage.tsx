import { motion } from "framer-motion";
import { useInvitationData } from "@/hooks/useInvitationData";

const GuestMessage = () => {
  const { nombre, pases } = useInvitationData();

  const nombreFinal = nombre && nombre.trim() !== "" ? nombre : "Invitado Especial";
  const pasesFinal = pases && pases.trim() !== "" ? pases : "1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="flex justify-center px-6 mt-8 mb-16"    >
      <div
        className="
          w-full max-w-xl
          rounded-2xl
          px-8 py-10
          text-center
          shadow-xl
          border
          border-primary/20
          backdrop-blur-md
        "
        style={{
          background: "rgba(255, 255, 255, 0.03)", // efecto glass elegante
        }}
      >
        {/* TEXTO SUPERIOR */}
        <p className="text-sm tracking-widest uppercase text-primary/60 mb-3">
          Invitación Especial para
        </p>

        {/* NOMBRE (PROTAGONISTA) */}
        <h2 className="text-3xl sm:text-4xl font-display text-primary mb-6">
          {nombreFinal}
        </h2>

        {/* MENSAJE */}
        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
          Tu presencia es el regalo más valioso que podemos recibir
        </p>

        {/* PASES */}
        <p className="text-primary text-lg font-semibold">
          Hemos reservado {pasesFinal}{" "}
          {pasesFinal === "1" ? "lugar" : "lugares"} para ti
        </p>

       
      </div>
    </motion.div>
  );
};

export default GuestMessage;