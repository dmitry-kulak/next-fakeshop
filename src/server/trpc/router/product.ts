import { publicProcedure, router } from "../trpc";
import { getProductSchema } from "../../../schemas/productSchemas";

export const product = router({
  getById: publicProcedure
    .input(getProductSchema)
    .query(({ input: productId, ctx }) =>
      ctx.prisma.product.findUnique({ where: { id: productId } })
    ),

  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.product.findMany()),
});
