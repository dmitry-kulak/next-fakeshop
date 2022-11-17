import { publicProcedure, router } from "../trpc";
import {
  getAllUsersOrdersSchema,
  getOrderSchema,
} from "../../../schemas/orderSchemas";

export const order = router({
  getById: publicProcedure
    .input(getOrderSchema)
    .query(({ input: orderId, ctx }) =>
      ctx.prisma.order.findUnique({ where: { id: orderId } })
    ),
  getAllByUserId: publicProcedure
    .input(getAllUsersOrdersSchema)
    .query(({ input: userId, ctx }) =>
      ctx.prisma.order.findMany({ where: { userId: userId } })
    ),
  // TODO
  // placeOrder: publicProcedure.input(placeOrderSchema).mutation()
});
