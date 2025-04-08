import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        // экспорт всех компонентов + store из zustand
        "./components": "./src/components",
      },
      shared: ["react", "react-dom"],
    }),
    // Плагин для уведомления host приложения, что текущий микрофронт был пересобран (обновился). Это для hot reload
    {
      name: "vite-plugin-notify-host-on-rebuild",
      apply(config, { command }) {
        return Boolean(command === "build" && config.build?.watch);
      },
      async buildEnd(error) {
        if (!error) {
          try {
            await fetch("http://localhost:5000/__fullReload");
          } catch (e) {
            console.log(e);
          }
        }
      },
    },
  ],
  server: {
    port: 5001,
    strictPort: true,
  },
  build: {
    target: "esnext",
    modulePreload: false,
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
});
