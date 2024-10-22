import { createRootRoute, } from "@tanstack/react-router";

import { EntryPoint, } from "../EntryPoint.tsx";

export const Route = createRootRoute({
  component: EntryPoint,
},);
