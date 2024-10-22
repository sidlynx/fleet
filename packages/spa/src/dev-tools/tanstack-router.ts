import { lazy, } from "react";

export const TanStackRouterDevtool
  = import.meta.env.MODE === "development"
    ? lazy(() =>
      import("@tanstack/router-devtools").then(res => ({
        default: res.TanStackRouterDevtools,
      }),),
    )
    : () => null;
