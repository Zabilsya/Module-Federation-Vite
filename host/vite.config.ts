import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";
import TanStackRouterVite from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/routes",
    }),
    federation({
      name: "host",
      remotes: {
        remote: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    // Плагин для hot reload приложения, когда какой-то из микрофронтов обновился
    {
      name: "vite-plugin-reload-endpoint",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.originalUrl === "/__fullReload") {
            server.hot.send({ type: "full-reload" });
            res.send("ds");
          } else {
            next();
          }
        });
      },
    },
  ],
  server: {
    port: 5000,
    strictPort: true,
  },
  build: {
    target: "esnext",
    modulePreload: false,
  },
});
