import { motion } from "framer-motion";

interface PhotoGalleryProps {
  position: "top" | "bottom";
}

const placeholderPhotos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
];

const PhotoGallery = ({ position }: PhotoGalleryProps) => {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <p className="font-script text-4xl text-primary mb-2">
          {position === "top" ? "Nuestra Historia" : "Momentos Especiales"}
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-primary/30" />
          <div className="w-2 h-2 rotate-45 bg-primary/50" />
          <div className="h-px w-20 bg-primary/30" />
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {placeholderPhotos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative group"
          >
            <div className="ornament-border p-2 bg-card">
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={`Foto ${i + 1}`}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
