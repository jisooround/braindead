import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1", // IP 주소
    port: 5173, // 포트 번호
  },
  plugins: [react()],
});
