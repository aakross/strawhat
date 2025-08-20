import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // aquí sí existe
import Header from "./components/Header.jsx";
import Portada from "./components/Portada.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Portada />
    <App />
  </StrictMode>
);
