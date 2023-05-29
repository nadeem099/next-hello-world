import Link from "next/link";
import type { Product as ProductType } from "./[productId]";

type Props = {
  products: Array<ProductType> | ProductType[];
};

export default function ProductList({ products }: Props) {
  return products.map((product) => (
    <div key={product.id}>
      <Link href={`/products/${product.id}`}>
        {product.title} {product.price}
      </Link>
    </div>
  ));
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3030/products");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
