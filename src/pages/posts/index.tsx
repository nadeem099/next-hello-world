import Link from "next/link";
export default function PostList({
  posts,
}: {
  posts: Array<{ id: string; name: string }>;
}): JSX.Element {
  return (
    <div>
      Post List:
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          {post.id} {post.name}
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
