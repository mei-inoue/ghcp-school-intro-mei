import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mei-inoue.github.io",
  base: "/ghcp-school-intro-mei",
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});