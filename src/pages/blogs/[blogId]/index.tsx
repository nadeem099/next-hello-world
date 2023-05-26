import React from "react";
import { useRouter } from "next/router";

function BlogPost(): JSX.Element {
  const {
    query: { blogId },
  } = useRouter();
  return <div>BlogPost : {blogId}</div>;
}

export default BlogPost;
