import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <>
      <div>F1</div>
      <Link href={"/f1/f2"}>Go to f2</Link>
      <Link href={"/f1/f3"}>Go to f3</Link>
    </>
  );
};

export default F1;
