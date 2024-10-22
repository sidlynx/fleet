import { z, } from "zod";

import { t, } from "../t";

export const greetingRouter = t.router({
  hello: t.procedure
    .input(
      z.object({
        name: z.string(),
      },),
    )
    .query(({ input, },) => `Hello, ${input.name}!`,),
},);
