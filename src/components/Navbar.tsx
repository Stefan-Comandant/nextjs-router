"use client";

import Link from "next/link";
import React from "react";
import "./Navbar.css";
import { usePathname } from "next/navigation";

interface Route {
  path: string;
  text: string;
}

const routes: Route[] = [
  {
    path: "/",
    text: "Home page",
  },
  {
    path: "/about",
    text: "About page",
  },
  {
    path: "/login",
    text: "Login page",
  },
  {
    path: "/register",
    text: "Register page",
  },
  {
    path: "/_lib",
    text: "Lib page",
  },
  {
    path: "/design",
    text: "Design page",
  },
  {
    path: "/newpath",
    text: "New layout page",
  },
  {
    path: "/profiles",
    text: "Profiles page",
  },
  {
    path: "/notifications",
    text: "Notifications page",
  },
];

function Navbar(): JSX.Element {
  const path = usePathname();
  return (
    <nav>
      {routes.map((value: Route) => {
        let isActive: boolean = false;

        if (path === "/" && value.path === path) isActive = true;
        else if (value.path !== "/") isActive = path.includes(value.path);

        return (
          <Link key={value.path} className={`link ${isActive && "active"}`} href={value.path}>
            {value.text}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
