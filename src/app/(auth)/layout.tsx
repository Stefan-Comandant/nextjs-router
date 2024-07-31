"use client"
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");

  return (
    <>
      <h1>Auth layout</h1>
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
