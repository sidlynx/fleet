import {lazy} from "react";
import { Outlet, createRootRoute, Link } from '@tanstack/react-router'

const ConditionalTanStackRouterDevtool =
  import.meta.env.MODE === 'development'
    ? lazy(() =>
      // Lazy load in development
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    ) : () => null // Render nothing in production


export const Route = createRootRoute({
  component: () => (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link> hna {import.meta.env.MODE}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Outlet />
      <ConditionalTanStackRouterDevtool />
    </>
  ),
})
