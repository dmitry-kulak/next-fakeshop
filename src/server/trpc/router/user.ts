import { publicProcedure, router } from "../trpc";
import { createUserSchema, getUserSchema } from "../../../schemas/userSchemas";

export const user = router({
  getById: publicProcedure
    .input(getUserSchema)
    .query(({ input, ctx }) =>
      ctx.prisma.user.findUnique({ where: { id: input } })
    ),

  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.user.findMany()),

  register: publicProcedure.input(createUserSchema).mutation(({ ctx, input }) =>
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
      ctx.prisma.user.create({
        data: input,
      })
    )
  ),
});
