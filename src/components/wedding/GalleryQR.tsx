import { motion } from "framer-motion";

const GalleryQR = () => {
  return (
    <section className="py-5 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto text-center space-y-6"
      >
        {/* SEPARADOR ELEGANTE */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-primary/30" />
          <span className="text-primary text-sm">❤</span>
          <div className="h-px w-20 bg-primary/30" />
        </div>

        {/* TITULO */}
        <p className="font-script text-4xl text-primary">
          Nuestros Recuerdos
        </p>

        {/* MENSAJE */}
        <p className="text-muted-foreground text-lg leading-relaxed">
         Ayúdanos a hacer eterno este día.<br/>
        Comparte con nosotros tus fotos y los momentos más especiales de nuestra boda.
        </p>

        {/* QR */}
        <div className="flex justify-center">
          <div className="p-4 rounded-2xl border border-primary/20 bg-card shadow-xl">
            <img
              src="/qr-boda.png"
              alt="QR fotos boda"
              className="w-44 h-44 object-contain"
            />
          </div>
        </div>

        {/* TEXTO FINAL */}
        <p className="text-sm text-muted-foreground">
          Escanea el código y sube tus recuerdos.
        </p>
      </motion.div>
    </section>
  );
};

export default GalleryQR;