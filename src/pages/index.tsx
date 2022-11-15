import Head from "next/head";
import Image from "next/image";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useState } from "react";
import type {
  FieldValues,
  Path,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import type { NextPage } from "next";
import type { OrderItem, Product } from "@prisma/client";

import { trpc } from "../utils/trpc";
import type { TCreateUser } from "../schemas/userSchemas";
import { createUserSchema } from "../schemas/userSchemas";

type LabeledInputProps<T extends FieldValues> = {
  field: Path<T>;
  label: string;
  register: UseFormRegister<T>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const LabeledInput = <T extends FieldValues>({
  field,
  label,
  register,
  ...rest
}: LabeledInputProps<T>) => (
  <div className="mb-4">
    <label className="mb-2" htmlFor={field}>
      {label}
    </label>
    <input
      className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
      {...rest}
      {...register(field)}
    />
  </div>
);

const ProductCard = ({ description, image, price, title }: Product) => {
  console.log(image);
  return (
    <div className="flex flex-col  rounded bg-white p-8 drop-shadow-md">
      <Image
        className="mx-auto"
        src={image}
        alt="product image"
        width={200}
        height={200}
      />
      <p className="text-center text-3xl font-bold">{title}</p>
      <p className="mx-auto w-1/2 text-center text-2xl">{description}</p>
      <p className="mx-auto w-1/2 text-center text-3xl">{price.valueOf()}</p>
      <button className="focus:shadow-outline self-center rounded bg-blue-500 py-2 px-10 font-bold text-white hover:bg-blue-700 focus:outline-none">
        Add to cart
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const [cart, setCart] = useState<OrderItem[]>();
  const queryClient = useQueryClient();

  const { data: users } = trpc.user.getAll.useQuery(undefined, {
    staleTime: 1000 * 60 * 5,
  });
  const usersQueryKey = [["user", "getAll"]];
  const { data: products } = trpc.product.getAll.useQuery(undefined, {
    staleTime: Infinity,
  });

  const registerUser = trpc.user.register.useMutation({
    onMutate: async (newUser) => {
      await queryClient.cancelQueries({ queryKey: usersQueryKey });
      const prevUsers = queryClient.getQueryData(usersQueryKey);

      // Optimistically update to the new value
      queryClient.setQueryData(
        [["user", "getAll"]],
        users?.concat({ id: Math.random().toString(), ...newUser }) ?? [newUser]
      );
      // Return a context object with the snapshotted value
      return { prevUsers };
    },
    onError: (err, newUser, ctx) => {
      queryClient.setQueryData(usersQueryKey, ctx?.prevUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: usersQueryKey });
    },
  });

  const { handleSubmit, register } = useForm<TCreateUser>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit: SubmitHandler<TCreateUser> = (values) => {
    registerUser.mutate(values);
  };

  const onInvalid: SubmitErrorHandler<TCreateUser> = (asd) => {
    alert(asd);
  };

  return (
    <>
      <Head>
        <title>Fake Shop</title>
        <meta name="description" content="Literally fake shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto flex">
        <form
          className="flex w-1/4 flex-col rounded bg-white p-8 drop-shadow-md"
          onSubmit={handleSubmit(onSubmit, onInvalid)}
        >
          <LabeledInput field="username" label="Username" register={register} />
          <LabeledInput
            field="firstName"
            label="First Name"
            register={register}
          />
          <LabeledInput
            field="lastName"
            label="Last Name"
            register={register}
          />
          <LabeledInput
            field="email"
            label="Email"
            type="email"
            register={register}
          />
          <LabeledInput
            field="password"
            label="Password"
            type="password"
            register={register}
          />
          <button className="focus:shadow-outline self-center rounded bg-blue-500 py-2 px-10 font-bold text-white hover:bg-blue-700 focus:outline-none">
            Submit
          </button>
        </form>

        <div className="flex flex-wrap">
          {products?.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 flex w-1/4 flex-col">
        {users?.map(({ id, firstName, lastName }) => (
          <p className="rounded border p-1" key={id}>
            {firstName} {lastName}
          </p>
        ))}
      </div>
    </>
  );
};

export default Home;
