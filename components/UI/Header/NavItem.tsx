"use client";

import Link from "next/link";
import { useState } from "react";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function NavItem({ item, index }: any) {
  const [activeTab, setActiveTab] = useState(0);

  if (!item.mega) {
    return (
      <li className="nav-item">
        <Link className="nav-link" href={item.href || "#"}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="nav-item mega-dropdown">
      {/* Mobile */}
      <MobileMenu item={item} index={index} />

      {/* Desktop */}
      <span className="nav-link d-none d-lg-inline d-flex align-items-center gap-1">
        {item.label} <i className="fa-solid fa-chevron-down nav-arrow"></i>
      </span>

      <MegaMenu item={item} activeTab={activeTab} setActiveTab={setActiveTab} />
    </li>
  );
}
