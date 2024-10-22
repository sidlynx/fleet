import { Link, Outlet, } from "@tanstack/react-router";

import { TanStackQueryDevtool, } from "./dev-tools/tanstack-query.ts";
import { TanStackRouterDevtool, } from "./dev-tools/tanstack-router.ts";
import { trpc, } from "./trpc.ts";

export const EntryPoint = () => {
  const { data, } = trpc.greeting.hello.useQuery({ name: "world", },);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          Message from server :
          {data}
        </li>
      </ul>
      <Outlet />
      <TanStackRouterDevtool />
      <TanStackQueryDevtool />
    </>
  );
};
