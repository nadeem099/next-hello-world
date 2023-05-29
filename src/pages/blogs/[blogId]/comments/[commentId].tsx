import React from "react";
import { useRouter } from "next/router";

function BlogPost(): JSX.Element {
  const { blogId, commentId } = useRouter().query;
  return <div>Blog: {blogId} and Comment : {commentId}</div>;
}

export default BlogPost;
