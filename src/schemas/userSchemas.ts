import { z } from "zod";

export const getUserSchema = z.string();
export const createUserSchema = z.object({
  username: z.string(),
  email: z.string().email("Incorrect email"),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});
export type TCreateUser = z.infer<typeof createUserSchema>;
