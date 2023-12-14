import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ReactErrorBoundary from "./Components/Error/ErrorBoundary.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactErrorBoundary>
  </React.StrictMode>,
);
