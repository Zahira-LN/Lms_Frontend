import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1/users": "http://localhost:8000",
    },
  },
  plugins: [react()],
});



// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api/v1/users": {
//         target: "http://localhost:8000",
//         changeOrigin: true, // Ensures proper proxying
//         secure: false,      // If using HTTP instead of HTTPS
//       },
//     },
//   },
//   plugins: [react()],
// });
