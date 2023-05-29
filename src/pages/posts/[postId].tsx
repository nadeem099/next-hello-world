import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { useRouter } from "next/router";

export default function Post({ post }: { post: { id: string; body: string } }) {
  // const router = useRouter();
  console.log("called components");

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <p>
        {post.id} {post.body}
      </p>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  console.log("called staticprops");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const posts = await response.json();
  console.log("called paths");
  const posts = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
