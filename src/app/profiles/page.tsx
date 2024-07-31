"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Profiles(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <h1>Proflie page</h1>
      <button
        onClick={async () => {
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
          });

          router.push("/profiles/4/friends/69");
        }}
      >
        Goto friend #69
      </button>
    </>
  );
}
