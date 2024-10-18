import { defineConfig, UserConfig, } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(async () => {
  const { default : config} = await import("config");

  return {
    plugins: [react()],
    server : {
      port : config.get("PORT"),
      host: "fleet_node"
    }
  } as UserConfig
})
