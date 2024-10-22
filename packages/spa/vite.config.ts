import type { UserConfig, } from "vite";

import { TanStackRouterVite, } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, } from "vite";

export default defineConfig(async () => {
  const { default: config, } = await import("config");

  return {
    plugins: [
      TanStackRouterVite(),
      react(),
    ],
    server: {
      port: config.get("PORT",),
      host: "fleet_node",
    },
  } as UserConfig;
},);
