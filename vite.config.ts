import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    open: true,
    proxy: {
      "/api": {
        // target: "http://192.168.50.251:8081",
        // target: "http://192.168.50.103:8081",
        // target: "http://127.0.0.1:8081/api",
        target: "https://www.aspicker.com/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
