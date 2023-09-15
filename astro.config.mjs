import { defineConfig } from 'astro/config';
import nodejs from 'astro';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone"
  }),
  output: 'server'
});