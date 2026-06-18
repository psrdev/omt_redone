"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const menuData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Who are we",
    mega: true,
    type: "tabs",
    img: "/images/about/about_outmazed2.png",
    tabs: [
      {
        label: "Company",
        desc: "The foundation, people and purpose behind OutMazed Tourism.",
        img: "/images/about/about_outmazed2.png",
        links: [
          { label: "Know about us", href: "#" },
          { label: "Vision & Mission", href: "#" },
          { label: "Leadership", href: "#" },
          { label: "Our Story", href: "#" },
        ],
      },
      {
        label: "Group Profile",
        desc: "A connected travel ecosystem built for scale and trust.",
        img: "/images/about/tabs-1.png",
        links: [
          { label: "Brand Overview", href: "#" },
          { label: "How We Operate", href: "#" },
          { label: "Global Presence", href: "#" },
          { label: "Why Outmazed Tourism", href: "#" },
        ],
      },
      {
        label: "Trust",
        desc: "Compliance, partnerships and operational confidence.",
        img: "/images/contact/contact-main.png",
        links: [
          { label: "Compliance", href: "#" },
          { label: "Partnerships", href: "#" },
          { label: "Certifications", href: "#" },
          { label: "Contact Overview", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Our Brands",
    mega: true,
    type: "hover-image",
    img: "/images/brands/OMT.svg",
    previewImg: "/images/about/about_outmazed2.png",
    sections: [
      {
        title: "Brand Ecosystem",
        desc: "Specialized brands serving travellers, corporates, agents and partners.",
        items: [
          {
            label: "Outmazed Travel",
            href: "https://outmazed.com",
            img: "/images/brands/OT.svg",
            visual: "/images/about/tabs-1.png",
          },
          {
            label: "Global Visa Shop",
            href: "https://globalvisashop.com",
            img: "/images/brands/GVS.svg",
            visual: "/images/contact/contact-main.png",
          },
          {
            label: "Wholesale Tourism",
            href: "https://wholesaletourism.com",
            img: "/images/brands/WST.svg",
            visual: "/images/about/about_outmazed2.png",
          },
          {
            label: "The Global Corporates",
            href: "https://globalcorporates.com",
            img: "/images/brands/GC.svg",
            visual: "/images/contact/contact-main.png",
          },
          {
            label: "Tech & Stack",
            href: "https://techstack.com",
            img: "/images/brands/TS.svg",
            visual: "/images/about/tabs-1.png",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    mega: true,
    type: "simple",
    img: "/images/about/about_outmazed2.png",
    sections: [
      {
        title: "Solutions",
        desc: "Travel, visa, corporate and wholesale solutions under one ecosystem.",
        links: [
          {
            label: "For Travellers",
            href: "#",
            img: "/images/about/tabs-1.png",
          },
          {
            label: "For Businesses",
            href: "#",
            img: "/images/contact/contact-main.png",
          },
          {
            label: "For Enterprises",
            href: "#",
            img: "/images/about/about_outmazed2.png",
          },
          {
            label: "For Partners",
            href: "#",
            img: "/images/contact/contact-main.png",
          },
        ],
      },
    ],
  },
  {
    label: "Technology",
    href: "#",
  },
  {
    label: "Insights",
    href: "#",
  },
  {
    label: "Contact",
    mega: true,
    type: "simple",
    img: "/images/contact/contact-main.png",
    sections: [
      {
        title: "Contact Us",
        desc: "Reach the right OutMazed Tourism department faster.",
        links: [
          {
            label: "B2C",
            href: "/contact/b2c",
            img: "/images/contact/contact-main.png",
          },
          {
            label: "B2B",
            href: "/contact/b2b",
            img: "/images/about/tabs-1.png",
          },
          {
            label: "Corporate",
            href: "/contact/corporate",
            img: "/images/about/about_outmazed2.png",
          },
          {
            label: "Marketing, Media & Legal",
            href: "/contact/marketing-media-legal",
            img: "/images/contact/contact-main.png",
          },
          {
            label: "Careers",
            href: "/contact/careers",
            img: "/images/about/tabs-1.png",
          },
          {
            label: "Technology",
            href: "/contact/technology",
            img: "/images/about/about_outmazed2.png",
          },
        ],
      },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<number | null>(null);
  const [activeTabs, setActiveTabs] = useState<Record<number, number>>({});
  const [hoveredLogo, setHoveredLogo] = useState<Record<number, string>>({});
  const [hoveredVisual, setHoveredVisual] = useState<Record<number, string>>(
    {},
  );

  const closeAll = () => {
    setMobileOpen(false);
    setActiveMega(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeAll}>
          <Image
            src="/images/logo/outmazed-tourism-logo-horiz.svg"
            alt="OutMazed Tourism"
            width={176}
            height={54}
            priority
          />
        </Link>

        <button
          className={`${styles.menuButton} ${mobileOpen ? styles.menuButtonActive : ""}`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {menuData.map((item: any, index) => {
              const isOpen = activeMega === index;
              const activeTab = activeTabs[index] || 0;
              const currentTab = item.tabs?.[activeTab];
              const logoImg = hoveredLogo[index] || item.img;
              const visualImg =
                hoveredVisual[index] || item.previewImg || item.img;

              if (!item.mega) {
                return (
                  <li key={index} className={styles.navItem}>
                    <Link
                      href={item.href}
                      className={styles.navLink}
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={index}
                  className={styles.navItem}
                  onMouseEnter={() => setActiveMega(index)}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <button
                    type="button"
                    className={`${styles.navLink} ${styles.navTrigger} ${
                      isOpen ? styles.navLinkActive : ""
                    }`}
                    onClick={() => setActiveMega(isOpen ? null : index)}
                  >
                    {item.label}
                    <span className={styles.arrow} />
                  </button>

                  <div
                    className={`${styles.mega} ${isOpen ? styles.megaOpen : ""}`}
                  >
                    <div className={styles.megaInner}>
                      {item.type === "tabs" && (
                        <div className={styles.tabsLayout}>
                          <div className={styles.tabsColumn}>
                            <div className={styles.kicker}>Explore</div>

                            {item.tabs.map((tab: any, tabIndex: number) => (
                              <button
                                key={tabIndex}
                                type="button"
                                className={`${styles.tabButton} ${
                                  activeTab === tabIndex
                                    ? styles.tabButtonActive
                                    : ""
                                }`}
                                onMouseEnter={() =>
                                  setActiveTabs((prev) => ({
                                    ...prev,
                                    [index]: tabIndex,
                                  }))
                                }
                                onClick={() =>
                                  setActiveTabs((prev) => ({
                                    ...prev,
                                    [index]: tabIndex,
                                  }))
                                }
                              >
                                <span>{tab.label}</span>
                                <small>{tab.desc}</small>
                              </button>
                            ))}
                          </div>

                          <div className={styles.panel}>
                            <div className={styles.panelContent}>
                              <div className={styles.panelTag}>
                                {currentTab.label}
                              </div>
                              <h3>{currentTab.desc}</h3>

                              <div className={styles.linkGrid}>
                                {currentTab.links.map(
                                  (link: any, linkIndex: number) => (
                                    <Link
                                      key={linkIndex}
                                      href={link.href}
                                      className={styles.megaLink}
                                      onClick={closeAll}
                                    >
                                      <span>{link.label}</span>
                                      <i />
                                    </Link>
                                  ),
                                )}
                              </div>
                            </div>

                            <div className={styles.tabImage}>
                              <Image
                                src={currentTab.img || item.img}
                                alt={currentTab.label}
                                width={560}
                                height={420}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {item.type === "simple" && (
                        <div className={styles.simpleLayout}>
                          <div className={styles.simpleContent}>
                            {item.sections?.map(
                              (section: any, sectionIndex: number) => (
                                <div key={sectionIndex}>
                                  <div className={styles.kickerDark}>
                                    {section.title}
                                  </div>
                                  <h3>{section.desc}</h3>

                                  <div className={styles.imageLinkGrid}>
                                    {section.links.map(
                                      (link: any, linkIndex: number) => (
                                        <Link
                                          key={linkIndex}
                                          href={link.href}
                                          className={styles.imageMegaLink}
                                          onClick={closeAll}
                                        >
                                          <span className={styles.linkThumb}>
                                            {link.img && (
                                              <Image
                                                src={link.img}
                                                alt={link.label}
                                                width={88}
                                                height={72}
                                              />
                                            )}
                                          </span>
                                          <span className={styles.linkText}>
                                            {link.label}
                                          </span>
                                          <i />
                                        </Link>
                                      ),
                                    )}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>

                          <div className={styles.imagePanel}>
                            <Image
                              src={item.img}
                              alt={item.label}
                              width={620}
                              height={460}
                            />
                          </div>
                        </div>
                      )}

                      {item.type === "hover-image" && (
                        <div className={styles.brandLayout}>
                          <div className={styles.brandContent}>
                            {item.sections?.map(
                              (section: any, sectionIndex: number) => (
                                <div key={sectionIndex}>
                                  <div className={styles.kickerDark}>
                                    {section.title}
                                  </div>
                                  <h3>{section.desc}</h3>

                                  <div className={styles.brandList}>
                                    {section.items.map(
                                      (link: any, linkIndex: number) => (
                                        <Link
                                          key={linkIndex}
                                          href={link.href}
                                          className={styles.brandLink}
                                          target={
                                            link.href.startsWith("http")
                                              ? "_blank"
                                              : undefined
                                          }
                                          onClick={closeAll}
                                          onMouseEnter={() => {
                                            setHoveredLogo((prev) => ({
                                              ...prev,
                                              [index]: link.img,
                                            }));
                                            setHoveredVisual((prev) => ({
                                              ...prev,
                                              [index]: link.visual,
                                            }));
                                          }}
                                        >
                                          <span className={styles.brandIcon}>
                                            <Image
                                              src={link.img}
                                              alt={link.label}
                                              width={46}
                                              height={46}
                                            />
                                          </span>
                                          <span className={styles.brandName}>
                                            {link.label}
                                          </span>
                                          <i />
                                        </Link>
                                      ),
                                    )}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>

                          <div className={styles.brandPreviewWrap}>
                            <div className={styles.logoPreview}>
                              {logoImg && (
                                <Image
                                  src={logoImg}
                                  alt={item.label}
                                  width={340}
                                  height={220}
                                />
                              )}
                            </div>

                            <div className={styles.brandPhoto}>
                              {visualImg && (
                                <Image
                                  src={visualImg}
                                  alt={item.label}
                                  width={520}
                                  height={260}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className={styles.cta} onClick={closeAll}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
