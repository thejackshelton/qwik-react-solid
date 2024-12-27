import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    qwikdev({
      include: "**/qwik/**",
    }),
    react({
      include: "**/react/**",
    }),
    solidJs({
      include: "**/solid/**",
    }),
  ],
});
