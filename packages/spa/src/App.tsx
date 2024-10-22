import type { AppRouter, } from "trpc";

import { Link, Outlet, } from "@tanstack/react-router";
import { createTRPCProxyClient, createWSClient, httpLink, splitLink, wsLink, } from "@trpc/client";
import { useEffect, } from "react";

import { TanStackQueryDevtool, } from "./dev-tools/tanstack-query.ts";
import { TanStackRouterDevtool, } from "./dev-tools/tanstack-router.ts";

export const App = () => {
  useEffect(() => {
    const { host, port, pathname, protocol, } = window.location;
    const wsClient = createWSClient({
      url: `${protocol === "http:" ? "ws" : "wss"}://${host}${port ? `:${port}` : ""}${pathname}`,
    },);

    const trpc = createTRPCProxyClient<AppRouter>({
      links: [
        // call subscriptions through websockets and the rest over http
        splitLink({
          condition(op,) {
            return op.type === "subscription";
          },
          true: wsLink({
            client: wsClient,
          },),
          false: httpLink({
            url: `/rpc`,
          },),
        },),
      ],
    },);

    trpc.greeting.hello.query({ name: "toto", },).then(console.log,);
  }, [],);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Outlet />
      <TanStackRouterDevtool />
      <TanStackQueryDevtool />
    </>
  );
};
