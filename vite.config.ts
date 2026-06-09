import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Hosted at https://aniket6990.github.io/aniket6990-portfolio/ (GitHub Pages project
// site — the path segment must match the GitHub repo name).
const ALLOWED_HOSTS = ["aniket6990.github.io", "localhost", "127.0.0.1"];

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5173,
    open: true,
    allowedHosts: ALLOWED_HOSTS,
  },
  preview: {
    port: 4173,
    allowedHosts: ALLOWED_HOSTS,
  },
});
