import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "",
    default: "Sgtue",
  },
};

export default function About(): React.ReactNode {
  return <h1>About page</h1>;
}
