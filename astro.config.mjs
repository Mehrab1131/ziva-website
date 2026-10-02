import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zivabio.ir",
  trailingSlash: "always",
  build: {
    // The whole stylesheet is ~4 KB gzipped: inlining it removes a render-blocking request.
    inlineStylesheets: "always",
  },
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })],
});
