import { z } from "zod";

import { publicProcedure, router } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    await ctx.prisma.example.create({
      data: {
        updatedAt: new Date(),
      },
    });
    return ctx.prisma.example.findMany();
  }),
});
