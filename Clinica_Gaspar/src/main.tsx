import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { globalStyles } from "./shared/components/themes/global.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {globalStyles}
    <App />
  </React.StrictMode>
);
