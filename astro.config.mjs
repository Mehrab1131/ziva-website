import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zivabio.ir",
  output: "static",
  compressHTML: true,
  build: { format: "directory" },
  integrations: [sitemap()]
});