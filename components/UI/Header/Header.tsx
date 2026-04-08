"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { menuData } from "@/data/menu";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white omt-shadow">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src="/images/logo/outmazed-tourism-logo-horiz.svg"
            alt="Outmazed"
            width={160}
            height={50}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mx-auto align-items-lg-center">
            {menuData.map((item, i) => (
              <NavItem key={i} item={item} index={i} />
            ))}
          </ul>

          <div className="ms-lg-3 mt-3 mt-lg-0">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
