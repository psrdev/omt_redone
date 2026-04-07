"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { menuData } from "@/data/menu";

export default function Header() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" href="/">
          <Image
            src="/images/logo/outmazed-tourism-logo.svg"
            alt="Outmazed"
            width={110}
            height={50}
          />
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          {/* NAV */}
          <ul className="navbar-nav mx-auto align-items-lg-center">
            {menuData.map((item, i) => (
              <li
                key={i}
                className={`nav-item ${item.mega ? "mega-dropdown" : ""}`}
              >
                {/* NORMAL LINK */}
                {!item.mega && (
                  <Link className="nav-link" href={item.href || "#"}>
                    {item.label}
                  </Link>
                )}

                {/* MEGA MENU */}
                {item.mega && (
                  <>
                    {/* MOBILE BUTTON */}
                    <button
                      className="nav-link d-flex justify-content-between align-items-center w-100 border-0 bg-transparent d-lg-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#mobileMenu-${i}`}
                    >
                      {item.label}
                    </button>

                    {/* DESKTOP LABEL */}
                    <span className="nav-link d-none d-lg-inline">
                      {item.label}
                    </span>

                    {/* ================= MOBILE ================= */}
                    <div id={`mobileMenu-${i}`} className="collapse d-lg-none">
                      <div className="mobile-menu">
                        {/* TABS */}
                        {item.type === "tabs" &&
                          item.tabs.map((tab, t) => (
                            <div key={t} className="mobile-section">
                              <div className="mobile-title">{tab.label}</div>

                              {tab.links.map((link, l) => (
                                <a
                                  key={l}
                                  href={link.href}
                                  className="mobile-link"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          ))}

                        {/* SIMPLE */}
                        {item.type === "simple" &&
                          item.sections?.map((section, s) => (
                            <div key={s} className="mobile-section">
                              <div className="mobile-title">
                                {section.title}
                              </div>

                              {section.links.map((link, l) => (
                                <a
                                  key={l}
                                  href={link.href}
                                  className="mobile-link"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* ================= DESKTOP ================= */}
                    <div className="mega-menu d-none d-lg-block">
                      {/* TABS TYPE */}
                      {item.type === "tabs" && (
                        <div className="row g-0">
                          {/* LEFT */}
                          <div className="col-md-3 mega-left">
                            {item.tabs.map((tab, index) => (
                              <div
                                key={index}
                                className={`mega-tab ${activeTab === index ? "active" : ""}`}
                                onMouseEnter={() => setActiveTab(index)}
                              >
                                {tab.label}
                              </div>
                            ))}
                          </div>

                          {/* RIGHT */}
                          <div className="col-md-9 mega-right">
                            {item.tabs[activeTab].links.map((link, j) => (
                              <a key={j} href={link.href} className="mega-link">
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SIMPLE TYPE */}
                      {item.type === "simple" && (
                        <div className="row g-0">
                          {item.sections?.map((section, j) => (
                            <div key={j} className="col-md-4 mega-simple">
                              <h6 className="mega-title">{section.title}</h6>

                              {section.links.map((link, k) => (
                                <a
                                  key={k}
                                  href={link.href}
                                  className="mega-link"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="ms-lg-3 mt-3 mt-lg-0">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
