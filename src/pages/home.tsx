import React from "react";
import Link from "next/link";
function Home() {
  return (
    <div>
      <Link href="/blogs" legacyBehavior><a>Blogs</a></Link>
      <Link href="/docs">Docs</Link>
    </div>
  );
}

export default Home;
