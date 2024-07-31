import Link from "next/link";
import React from "react";

const F2 = () => {
  return (
    <>
      <div>F2</div>
      <Link href={"/f1"}>Go to f1</Link>
      <Link href={"/f1/f3"}>Go to f3</Link>
    </>
  );
};

export default F2;
