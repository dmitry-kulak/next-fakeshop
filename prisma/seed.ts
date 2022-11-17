import { PrismaClient } from "@prisma/client";
import { productsSeed } from "./seeds/productsSeed";
import { usersSeed } from "./seeds/usersSeed";

const prisma = new PrismaClient();

// Populates db with products and a user
const main = async () => {
  await prisma.rating.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  const createProducts = productsSeed.map((product) =>
    prisma.product.create({
      data: product,
    })
  );
  const createUsers = usersSeed.map((user) =>
    prisma.user.create({
      data: user,
    })
  );

  return Promise.all([...createProducts, ...createUsers]);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
