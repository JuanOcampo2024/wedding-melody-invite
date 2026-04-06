## Crear carpeta public/photos
public
   photos
      foto1.jpg
      foto2.jpg
      foto3.jpg
      foto4.jpg

      En PhotoGallery.tsx cambiar:
      const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200",
  "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=1200",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200",
];

por 
const photos = [
  "/photos/foto1.jpg",
  "/photos/foto2.jpg",
  "/photos/foto3.jpg",
  "/photos/foto4.jpg",
];