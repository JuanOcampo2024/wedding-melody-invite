import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MusicProvider } from "./context/MusicContext";

createRoot(document.getElementById("root")!).render(
  <MusicProvider>
    <App />
  </MusicProvider>
);
