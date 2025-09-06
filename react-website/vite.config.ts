import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

export default defineConfig({
	plugins: [
		react(),
		{
			name: "netlify-redirects-plugin",
			buildEnd() {
				const redirectsContent = `/portfolio/*   /portfolio/index.html   200\n`;
				const redirectsPath = resolve(
					__dirname,
					"../ncoover-portfolio/_redirects"
				);

				// Ensure file is created/overwritten on each build
				fs.writeFileSync(redirectsPath, redirectsContent, "utf-8");
				console.log(`✅ Netlify _redirects file written to ${redirectsPath}`);
			},
		},
	],
	build: {
		outDir: "../ncoover-portfolio/portfolio", // React build goes into ncoover-portfolio/portfolio
		emptyOutDir: true,
	},
});
