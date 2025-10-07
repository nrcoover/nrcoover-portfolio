import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
	base: mode === "production" ? "/portfolio" : "/",
	plugins: [react()],
	build: {
		outDir: "../portfolio", // Build into root portfolio folder
		emptyOutDir: true,
	},
	server: {
		port: 5173,
		proxy: {
			// Proxy static site pages back to localhost:8888
			"/index.html": "http://localhost:8888",
			"/about.html": "http://localhost:8888",
			"/contact.html": "http://localhost:8888",
		},
	},
}));
