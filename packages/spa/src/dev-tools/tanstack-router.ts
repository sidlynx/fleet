import {lazy} from "react";

export const TanStackRouterDevtool =
  import.meta.env.MODE === 'development'
    ? lazy(() =>
      // Lazy load in development
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    ) : () => null // Render nothing in production
