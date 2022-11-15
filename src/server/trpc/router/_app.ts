import { router } from "../trpc";
import { user } from "./user";
import { product } from "./product";

export const appRouter = router({
  user,
  product,
});

// export type definition of API
export type AppRouter = typeof appRouter;
