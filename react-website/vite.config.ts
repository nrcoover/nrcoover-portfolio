import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	base: "/portfolio/", // ensures React Router works under /portfolio/
	build: {
		outDir: path.resolve(__dirname, "../dist/portfolio"), // build inside static site
		emptyOutDir: true,
	},
});
