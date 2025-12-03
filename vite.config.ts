import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import reactDocgenTypescript from "@joshwooding/vite-plugin-react-docgen-typescript";

export default defineConfig({
  plugins: [react(), reactDocgenTypescript()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@foundations": path.resolve(__dirname, "src/foundations"),
    },
  },
});
