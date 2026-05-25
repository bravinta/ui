import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const root = import.meta.dirname;

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.json",
      exclude: ["vite.config.ts"],
    }),
  ],
  build: {
    target: "esnext",
    minify: "oxc",
    sourcemap: true,
    reportCompressedSize: true,
    emptyOutDir: true,
    lib: {
      entry: {
        index: resolve(root, "index.ts"),
        markdown: resolve(root, "src/markdown/index.ts"),
      },
      formats: ["es", "cjs"],
    },
    rolldownOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        /^@base-ui\/react\//,
        "tailwind-merge",
        "tailwind-variants",
      ],
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: resolve(root, "src"),
          entryFileNames: "[name].js",
        },
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: resolve(root, "src"),
          entryFileNames: "[name].cjs",
        },
      ],
    },
  },
});
