import React from "react";
import ReactDOM from "react-dom/client";
import { CommonProvider } from "./hooks/useCommon.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/react-query.ts";
import App from "./App.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CommonProvider>
        <App />
      </CommonProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
