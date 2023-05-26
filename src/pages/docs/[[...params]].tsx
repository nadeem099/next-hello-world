import React from "react";
import { useRouter } from "next/router";

// type Obj = {
//   details: { firstName: string; age: number }[];
// };
// const obj: Obj = { details: [{ firstName: "Nadeem", age: 24 }] };
// const {
//   details: [{ firstName, age }],
// }: Obj = obj;

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  const [feature, concept] = params;

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {feature} and concept {concept}
      </h1>
    );
  }
  return params.length === 1 ? (
    <h1>Viewing docs for feature {feature}</h1>
  ) : (
    <h1>Docs home page</h1>
  );
}

export default Doc;
