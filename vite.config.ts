import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        // 全局变量
        globalVars: {
          red: "red",
        },
      },
    },
  },
});
