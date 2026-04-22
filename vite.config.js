import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "HalleyxUI",
      fileName: "halleyx-ui",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named", // ✅ fixes MIXED_EXPORTS
        globals: {
          vue: "Vue", // ✅ fixes MISSING_GLOBAL_NAME
        },
      },
    },
  },
});
