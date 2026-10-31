import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { installSchemaDedupe } from "./lib/schema-dedupe";

createRoot(document.getElementById("root")!).render(<App />);

// The prerender ships the page's JSON-LD; the client render injects it again.
// Collapse the duplicates so the indexed DOM has one block per entity.
installSchemaDedupe();
