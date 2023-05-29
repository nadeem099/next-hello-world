import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export type Product = {
  id: string;
  title: string;
  price: number;
  stock: number;
};

export type Props = {
  product: Product;
};

export default function Product({ product }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{product.title}</p>
      <p>Price: {product.price}Rs</p>
      <p>{product.stock} left</p>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:3030/products/${params?.productId}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
    ],
    fallback: true,
  };
}
