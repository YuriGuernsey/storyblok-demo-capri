import capri from "@capri-js/vue";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    https: true,
  },
  plugins: [
    vue(),
    capri({
      spa: "/preview",
    }),
  ],
});
