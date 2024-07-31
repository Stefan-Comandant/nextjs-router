import Link from "next/link";
import React from "react";

const F3 = () => {
  return (
    <>
      <div>F3</div>
      <Link href={"/f1"}>Go to f1</Link>
      <Link href={"/f1/f2"}>Go to f2</Link>
      <Link href={"/about"}>Go to about</Link>
    </>
  );
};

export default F3;
