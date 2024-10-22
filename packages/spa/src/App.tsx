import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import { createRouter, RouterProvider, } from "@tanstack/react-router";
import { httpBatchLink, } from "@trpc/client";
import { useState, } from "react";

import { routeTree, } from "./routeTree.gen.ts";
import { trpc, } from "./trpc";

const router = createRouter({ routeTree, },);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  const [queryClient,] = useState(() => new QueryClient(),);
  const [trpcClient,] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/rpc",
          // You can pass any HTTP headers you wish here
          // async headers() {
          //   return {
          //     authorization: getAuthCookie(),
          //   };
          // },
        },),
      ],
    },),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
