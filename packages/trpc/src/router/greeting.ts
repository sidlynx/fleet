import { t, } from "../t";

import { z, } from "zod";

export const greetingRouter = t.router({
  hello: t.procedure
    .input(
      z.object({
        name: z.string(),
      },),
    )
    .query(({ input, },) => `Hello, ${input.name}!`,),
},);
