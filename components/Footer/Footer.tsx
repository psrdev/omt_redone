"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const companyLinks = [
  {
    label: "About OutMazed",
    href: "/about",
  },
  {
    label: "Leadership",
    href: "/leadership",
  },
  {
    label: "Careers",
    href: "/career",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const partnerLinks = [
  {
    label: "Partner With Us",
    href: "/partner-with-us",
  },
  {
    label: "B2B Travel Solutions",
    href: "/b2b",
  },
  {
    label: "Corporate Travel",
    href: "/corporate-travel",
  },
  {
    label: "Technology Solutions",
    href: "/technology",
  },
];

const socialLinks = [
  {
    href: "https://wa.me/971503431800",
    label: "WhatsApp",
    icon: "fa-whatsapp",
  },
  {
    href: "https://www.instagram.com/outmazedtourism/",
    label: "Instagram",
    icon: "fa-instagram",
  },
  {
    href: "https://www.facebook.com/OutMazedTourism/",
    label: "Facebook",
    icon: "fa-facebook-f",
  },
  {
    href: "https://x.com/OutMazedT",
    label: "X",
    icon: "fa-x-twitter",
  },
  {
    href: "https://www.tiktok.com/@outmazedtourism",
    label: "TikTok",
    icon: "fa-tiktok",
  },
  {
    href: "https://www.linkedin.com/company/outmazedtourism/",
    label: "LinkedIn",
    icon: "fa-linkedin-in",
  },
  {
    href: "https://www.youtube.com/@OutMazedTourism",
    label: "YouTube",
    icon: "fa-youtube",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundPattern} aria-hidden="true" />
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.container}>
        {/* CTA Area */}
        <div className={styles.footerCta}>
          <div className={styles.ctaContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span className={styles.eyebrowText}>Start a conversation</span>
            </div>

            <h2 className={styles.ctaTitle}>
              Let&apos;s create better travel experiences together.
            </h2>
          </div>

          <Link href="/contact" className={styles.ctaButton}>
            <span>Talk to our team</span>

            <span className={styles.ctaButtonIcon}>
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </span>
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.brandColumn}>
            <Link
              href="/"
              className={styles.logoLink}
              aria-label="OutMazed Tourism home"
            >
              <Image
                src="/images/logo/logo-white.svg"
                alt="OutMazed Tourism"
                width={160}
                height={95}
                className={styles.logo}
              />
            </Link>

            <p className={styles.brandDescription}>
              A UAE-based tourism company delivering connected travel,
              destination, visa, corporate and technology solutions through one
              trusted ecosystem.
            </p>

            <div className={styles.location}>
              <span className={styles.locationIcon}>
                <i className="fa-solid fa-location-dot" />
              </span>

              <div className={styles.locationContent}>
                <span className={styles.locationLabel}>Headquartered in</span>

                <span className={styles.locationValue}>
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Company</h3>

            <nav aria-label="Company links">
              <ul className={styles.linkList}>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Partner Links */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Work With Us</h3>

            <nav aria-label="Work with us links">
              <ul className={styles.linkList}>
                {partnerLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Get In Touch</h3>

            <div className={styles.contactList}>
              <a
                href="tel:+971503431800"
                className={styles.contactItem}
                aria-label="Call OutMazed Tourism"
              >
                <span className={styles.contactIcon}>
                  <i className="fa-solid fa-phone" />
                </span>

                <span className={styles.contactContent}>
                  <span className={styles.contactLabel}>Call us</span>

                  <span className={styles.contactValue}>+971 50 343 1800</span>
                </span>

                <i
                  className={`fa-solid fa-arrow-right ${styles.contactArrow}`}
                />
              </a>

              <a
                href="mailto:info@outmazedtourism.com"
                className={styles.contactItem}
                aria-label="Email OutMazed Tourism"
              >
                <span className={styles.contactIcon}>
                  <i className="fa-solid fa-envelope" />
                </span>

                <span className={styles.contactContent}>
                  <span className={styles.contactLabel}>Email us</span>

                  <span className={styles.contactValue}>
                    info@outmazedtourism.com
                  </span>
                </span>

                <i
                  className={`fa-solid fa-arrow-right ${styles.contactArrow}`}
                />
              </a>
            </div>

            <div className={styles.socialSection}>
              <span className={styles.socialLabel}>Connect with OutMazed</span>

              <ul className={styles.socialList}>
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={`Visit OutMazed Tourism on ${link.label}`}
                    >
                      <i className={`fa-brands ${link.icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} OutMazed Tourism LLC. All rights reserved.
          </p>

          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>

            <Link href="/cookie-policy">Cookie Policy</Link>

            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>

          <Link href="#top" className={styles.backToTop}>
            <span>Back to top</span>

            <span className={styles.backToTopIcon}>
              <i className="fa-solid fa-arrow-up" />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
