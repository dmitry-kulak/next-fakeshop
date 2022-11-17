import { router } from "../trpc";
import { user } from "./user";
import { product } from "./product";
import { order } from "./order";

export const appRouter = router({
  user,
  product,
  order,
});

// export type definition of API
export type AppRouter = typeof appRouter;
