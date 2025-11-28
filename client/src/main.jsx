import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "leaflet/dist/leaflet.css";
import { ToasterPortal, themeMap } from "@acrool/react-toaster";
import "@acrool/react-toaster/dist/index.css";
import QueryProvider from "./shared/context/QueryProvider";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryProvider>
      <App />
      <ToasterPortal
        defaultTimeout={5000} // auto dismiss after 3s
        limit={1} // max number of toasts at once
        position={{
          vertical: "top",
          horizontal: "center",
        }}
        themeMap={themeMap}
      />
    </QueryProvider>
    <Analytics />
  </StrictMode>
);
