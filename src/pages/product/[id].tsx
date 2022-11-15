import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import type { ParsedUrlQuery } from "querystring";
import { Product } from "@prisma/client";
import { prisma } from "../../server/db/client";
import superjson from "superjson";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await prisma.product.findMany();
  const idsPaths = products.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths: idsPaths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<
  { product: string },
  Params
> = async (context) => {
  console.log(context);
  try {
    const id = Number(context.params?.id);
    console.log(id);
    if (Number.isNaN(id)) throw new Error("wrong id " + context.params?.id);

    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) throw new Error("product not found");

    return {
      // can't send objects with methods (price: Prisma.Decimal) so need to use superjson
      props: { product: superjson.stringify(product) },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

const Product = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const product: Product = superjson.parse(props.product);
  return (
    <div>
      <img width="300" height="300" src={product.image}></img>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price.valueOf()}</p>
    </div>
  );
};
export default Product;
