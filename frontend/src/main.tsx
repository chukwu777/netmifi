import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StoreProvider } from "easy-peasy";
import store from "./store/store.ts";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { SidebarProvider } from "./components/ui/sidebar.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider store={store}>

      <SidebarProvider>
      <TooltipProvider>
        <App />
        </TooltipProvider>

        </SidebarProvider>
        
    </StoreProvider>
  </React.StrictMode>
);
