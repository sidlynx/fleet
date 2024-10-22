import { initTRPC, } from "@trpc/server";

const t = initTRPC.create();

const publicProcedure = t.procedure;
const router = t.router;

const pingRouter = router({
  ping: publicProcedure.query(() => {
    return { app: { state: "COMING_SOON", }, };
  },),
},);

export const appRouter = router({
  hello: pingRouter,
},);

export type AppRouter = typeof appRouter;
