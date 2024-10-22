import { t, } from "../t";

import { observable, } from "@trpc/server/observable";
import { z, } from "zod";

export const postRouter = t.router({
  createPost: t.procedure
    .input(
      z.object({
        title: z.string(),
        text: z.string(),
      },),
    )
    .mutation(({ input, },) => {
      // imagine db call here
      return {
        id: `${Math.random()}`,
        ...input,
      };
    },),
  randomNumber: t.procedure.subscription(() => {
    return observable<{ randomNumber: number }>((emit,) => {
      const timer = setInterval(() => {
        // emits a number every second
        emit.next({ randomNumber: Math.random(), },);
      }, 200,);

      return () => {
        clearInterval(timer,);
      };
    },);
  },),
},);
