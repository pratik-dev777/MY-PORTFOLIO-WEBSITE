import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "node:process";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/MY-PORTFOLIO-WEBSITE/" : "/",
  plugins: [react()],
});
