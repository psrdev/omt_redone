import Image from "next/image";
import Link from "next/link";
import styles from "./EcosystemSection.module.css";

const brands = [
  {
    id: "01",
    title: "OutMazed Travel",
    type: "B2C",
    desc: "Consumer travel distribution channel delivering curated travel experiences.",
    href: "https://outmazed.com",
    img: "/images/brands/OT.svg",
  },
  {
    id: "02",
    title: "Global Visa Shop",
    type: "B2C",
    desc: "One-stop global visa platform including UAE tourist visa solutions.",
    href: "https://globalvisashop.com",
    img: "/images/brands/GVS.svg",
  },
  {
    id: "03",
    title: "Wholesale Tourism",
    type: "B2B",
    desc: "High-volume travel distribution platform for global travel agents and partners.",
    href: "https://wholesaletourism.com",
    img: "/images/brands/WST.svg",
  },
  {
    id: "04",
    title: "The Global Corporates",
    type: "Enterprise",
    desc: "Smart corporate travel management solution for seamless business travel.",
    href: "https://globalcorporates.com",
    img: "/images/brands/GC.svg",
  },
  {
    id: "05",
    title: "Tech & Stack",
    type: "Technology",
    desc: "Core technology division powering OutMazed's distribution infrastructure.",
    href: "https://techandstack.com",
    img: "/images/brands/TS.svg",
  },
];

export default function EcosystemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>OUR ECOSYSTEM</span>

        <h2 className={styles.heading}>
          One Group.
          <br />
          Multiple Travel Solutions.
        </h2>

        <div className={styles.list}>
          {brands.map((brand) => (
            <div key={brand.id} className={styles.row}>
              <div className={styles.number}>({brand.id})</div>

              <div className={styles.content}>
                <h3>{brand.title}</h3>

                <div className={styles.details}>
                  <Link
                    href={brand.href}
                    target="_blank"
                    className={styles.visitLink}
                  >
                    Visit Brand →
                  </Link>
                </div>
              </div>

              <div className={styles.arrow}>↗</div>

              <div className={styles.preview}>
                <div className={styles.previewInner}>
                  <div className={styles.logoWrap}>
                    <Image
                      src={brand.img}
                      alt={brand.title}
                      width={200}
                      height={200}
                      className={styles.logo}
                    />
                  </div>

                  <div className={styles.previewType}>{brand.type}</div>

                  <h4>{brand.title}</h4>

                  <p>{brand.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
