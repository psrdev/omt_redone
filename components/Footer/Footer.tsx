"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

const socialLinks = [
  {
    href: "https://wa.me/971503431800",
    label: "whatsapp",
    icon: "fa-whatsapp",
  },
  {
    href: "https://www.instagram.com/outmazedtourism/",
    label: "instagram",
    icon: "fa-instagram",
  },
  {
    href: "https://www.facebook.com/OutMazedTourism/",
    label: "facebook",
    icon: "fa-facebook-f",
  },
  {
    href: "https://x.com/OutMazedT",
    label: "twitter",
    icon: "fa-x-twitter",
  },
  {
    href: "https://www.tiktok.com/@outmazedtourism",
    label: "tiktok",
    icon: "fa-tiktok",
  },
  {
    href: "https://www.linkedin.com/company/outmazedtourism/",
    label: "linkedin",
    icon: "fa-linkedin-in",
  },
  {
    href: "https://www.youtube.com/@OutMazedTourism",
    label: "youtube",
    icon: "fa-youtube",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container px-4 px-md-0">
        <div className="row py-5">
          <div className="col-md-3 mb-4 mb-md-0 p-0">
            <Image
              src="/images/logo/logo-white.svg"
              alt="Logo"
              width={90}
              height={90}
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <p className="fs-6 text-uppercase text-white mb-2 fw-bold">
              Company
            </p>
            <div className="d-flex flex-column ">
              <Link href="#" className={styles.link}>
                Partner with us
              </Link>
              <Link href="#" className={styles.link}>
                Careers
              </Link>
              <Link href="#" className={styles.link}>
                Contact us
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <p className="fs-6 text-uppercase text-white mb-2 fw-bold  d-flex">
              Contact
            </p>
            <a href="tel:+971503431800" className="text-light d-block mb-2 text-decoration-none">
              <i
                className="fa-solid fa-phone me-2"
                style={{ fontSize: "14px" }}
              ></i>{" "}
              +971 50 343 1800
            </a>
            <a href="mailto:info@outmazedtourism.com" className="text-light d-block text-decoration-none">
              <i className="fa-solid fa-envelope me-2"></i>{" "}
              info@outmazedtourism.com
            </a>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <p className="fs-6 text-uppercase text-white mb-2 fw-bold  d-flex">
              Connect
            </p>
            <ul className="d-flex list-unstyled  mb-0 g-4 text-white">
              {socialLinks.map((link) => (
                <li key={link.label} className={styles.socialIcon}>
                  <a
                    className="text-light fs-5"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <i className={`fa-brands ${link.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent + " py-3 px-4"}>
            <div className="">
              <div className=" d-flex gap-4 mb-2 justify-content-center">
                <Link href="#" className="text-dark text-decoration-none">
                  Cookie policy 
                </Link>
                <Link href="#" className="text-dark text-decoration-none">
                  Privacy policy 
                </Link>
              </div>
              <p className="text-dark text-center mb-0">
                &copy; {new Date().getFullYear()} Outmazed Tourism. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
