import type { CreateHTTPContextOptions, } from "@trpc/server/adapters/standalone";
import type { CreateWSSContextFnOptions, } from "@trpc/server/adapters/ws";

export function createContext(
  _opts: CreateHTTPContextOptions | CreateWSSContextFnOptions,
) {
  return {};
}

export type Context = Awaited<ReturnType<typeof createContext>>;
