"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState("");

  return (
    <div>
      <div>Tweets</div>
      <Link href="/settings">Go to settings</Link>
      <button onClick={() => setState("state changed")}>Click</button>
    </div>
  );
}

/**
 * NextJS, TypeScript
 * Styled component, antd
 * jest, rtl
 * cypress - end to end testing
 * webpack -> turbopack
 * rtk
 */
