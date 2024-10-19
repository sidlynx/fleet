import {lazy} from "react";

export const TanStackQueryDevtool =
  import.meta.env.MODE === 'development'
    ? lazy(() =>
      // Lazy load in development
      import('@tanstack/react-query-devtools').then((res) => ({
        default: res.ReactQueryDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    ) : () => null // Render nothing in production
