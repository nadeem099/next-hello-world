import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Blog() {
  const router = useRouter();
  return (
    <>
      <div>Blog</div>
      <div>
        <Link href="/blogs">All Blogs</Link>
        <Link href="/blogs/1">Blog 1</Link>
        <Link href="/blogs/2" replace>
          Blog2
        </Link>
        <button
          onClick={() => {
            router.push("/blogs/author");
          }}
        >
          Author profile
        </button>
      </div>
      <Link href="/home">Go back to Home</Link>
    </>
  );
}

export default Blog;
