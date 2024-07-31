"use client";
import React, { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }): JSX.Element {
  const [name, setName] = useState("");

  return (
    <>
      {children}
      <h1>This is the /profiles template</h1>
      <h1>Name: {name}</h1>
      <label htmlFor="name">Enter your name</label>
      <input
        id="name"
        type="text"
        onInput={(event: React.FormEvent<HTMLInputElement>): void => {
          setName(event.currentTarget.value);
        }}
      />
    </>
  );
}
