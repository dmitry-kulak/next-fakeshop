import { PrismaClient } from "@prisma/client";
import { products } from "./products";

const prisma = new PrismaClient();

// Populates db with products
const main = async () => {
  await prisma.product.deleteMany();

  return Promise.all(
    products.map(({ rating, ...product }) =>
      prisma.product.create({
        data: { ...product, rating: { create: rating } },
      })
    )
  );
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
