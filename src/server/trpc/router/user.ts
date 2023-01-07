import { publicProcedure, router } from "@server/trpc/trpc";
import { getUserSchema } from "@schemas/userSchemas";

export const user = router({
  getById: publicProcedure.input(getUserSchema).query(({ input: userId, ctx }) =>
    ctx.prisma.user.findUnique({
      where: { id: userId },
      include: { orders: true },
    })
  ),

  // TODO
  // register: publicProcedure.input(createUserSchema).mutation(({ ctx, input }) =>
  //   new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
  //     ctx.prisma.user.create({
  //       data: input,
  //     })
  //   )
  // ),
});
