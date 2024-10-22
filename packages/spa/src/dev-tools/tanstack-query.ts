import { lazy, } from "react";

export const TanStackQueryDevtool
  = import.meta.env.MODE === "development"
    ? lazy(() =>
      import("@tanstack/react-query-devtools").then(res => ({
        default: res.ReactQueryDevtools,
      }),),
    )
    : () => null;
