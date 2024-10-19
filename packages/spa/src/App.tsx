import {Link, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtool} from "./dev-tools/tanstack-router.ts";
import {TanStackQueryDevtool} from "./dev-tools/tanstack-query.ts";

export const App = () => {
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
  )
}
