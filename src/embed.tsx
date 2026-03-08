import { createRoot } from "react-dom/client";
import { EmbedClock } from "./components/EmbedClock";
import "./embed.css";

createRoot(document.getElementById("embed-root")!).render(<EmbedClock />);
