"use client";

import Link from "next/link";
import React from "react";

export default function Home(): React.ReactNode {
  return (
    <>
      <h1>Home page</h1>
      <Link href={"/design"}>Go to design</Link>
    </>
  );
}
