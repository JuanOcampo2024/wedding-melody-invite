import PhotoSparkles from "@/components/wedding/PhotoSparkles";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PhotoGalleryProps {
  position: "top" | "bottom";
}

const photos = [
  "/photos/foto2.jpeg",
  "/photos/foto3.jpeg",
  "/photos/foto4.jpeg",
  "/photos/foto1.jpeg",
];

const PhotoGallery = ({ position }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-0 pb-0 overflow-hidden">

      {/* FOTO */}
      <div className="relative w-full max-w-4xl mx-auto h-[420px] sm:h-[520px] rounded-xl overflow-hidden shadow-xl">
  
  <AnimatePresence mode="wait">
    <motion.img
      key={photos[index]}
      src={photos[index]}
      alt="foto boda"
      className="absolute w-full h-full object-cover"
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    />
  </AnimatePresence>

  {/* ✨ POLVO MÁGICO ENCIMA */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    <PhotoSparkles />
  </div>

</div>

      {/* TEXTO */}
      <div className="text-center mt-12 px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="font-script text-5xl sm:text-6xl text-primary mb-6"
        >
          ¡Nos casamos!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
        >
          "Uno solo puede ser vencido, pero dos pueden resistir.
          La cuerda de tres hilos no se rompe fácilmente"

          <span className="block text-sm text-right mt-1 opacity-70">
            Eclesiastés 4:12
          </span>
        </motion.p>

        {/* SEPARADOR */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="h-px w-24 bg-primary/30" />
          <span className="text-primary text-sm">❤</span>
          <div className="h-px w-24 bg-primary/30" />
        </div>

        {/* BENDICIÓN */}
        <div className="mt-10">

          <p className="text-muted-foreground text-lg mb-8">
            Con la bendición de Dios y de nuestros padres
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">

            <div>
              <p className="text-primary font-semibold mb-2">
                Padres de la Novia
              </p>
              <p className="text-muted-foreground">
                Sr. Librado Antonio Rios Castro
              </p>
              <p className="text-muted-foreground">
                Sra. Marta Dolly Castro Tabares
              </p>
            </div>

            <div>
              <p className="text-primary font-semibold mb-2">
                Padres del Novio
              </p>
              <p className="text-muted-foreground">
                Sr. Edgar Javier Rios Castro
              </p>
              <p className="text-muted-foreground">
                Sra. Monica Maria Tabares Castro
              </p>
            </div>

          </div>

        </div>

      </div>

      <div className="flex items-center justify-center gap-4 mt-12">
          <div className="h-px w-24 bg-primary/30" />
          <span className="text-primary text-sm">❤</span>
          <div className="h-px w-24 bg-primary/30" />
        </div>
    </section>
  );
};

export default PhotoGallery;