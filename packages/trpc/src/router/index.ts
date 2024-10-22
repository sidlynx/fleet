import { greetingRouter, } from "../router/greeting";
import { postRouter, } from "../router/post";
import { t, } from "../t";

export const appRouter = t.router({
  // ping: t.procedure.query(() => {
  //  return { app: { state: 'COMING_SOON' } };
  // }),
  greeting: greetingRouter,
  post: postRouter,
},);

export type AppRouter = typeof appRouter;
