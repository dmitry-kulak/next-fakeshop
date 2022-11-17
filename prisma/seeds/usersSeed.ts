import type { Prisma } from "@prisma/client";

export const usersSeed: Prisma.UserCreateInput[] = [
  {
    email: "gaga@gmail.com",
    firstName: "Gaga",
    lastName: "Gondola",
    password: "qwerty",
    username: "gondola",
  },
];
