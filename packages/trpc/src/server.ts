import { createContext, } from "./context";
import { appRouter, } from "./router";

import { createHTTPServer, } from "@trpc/server/adapters/standalone";

const server = createHTTPServer({
  router: appRouter,
  createContext,
},);

// ws server
// const wss = new WebSocketServer({ server });
// applyWSSHandler<AppRouter>({
//  wss,
//  router: appRouter,
//  createContext,
// });

// setInterval(() => {
//   console.log('Connected clients', wss.clients.size);
// }, 1000);
server.listen(2022,);

console.log("server is listening on port 2022",);
