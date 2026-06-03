import Image from "next/image";
import styles from "./TravelEcosystemSection.module.css";

const services = [
  "Leisure Travel",
  "Visa Assistance",
  "Corporate Travel",
  "Wholesale Tourism",
  "Travel Technology",
];

export default function TravelEcosystemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.visual}>
            <Image
              src="/images/home/travel-ecosystem-illustration.png"
              alt="OutMazed Travel Ecosystem"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <span className={styles.tag}>INTEGRATED ECOSYSTEM</span>

            <h2 className={styles.heading}>
              Everything Travel.
              <br />
              Connected Under
              <br />
              One Roof.
            </h2>

            <p className={styles.description}>
              OutMazed<sup>®</sup> Tourism brings together travel, visa,
              corporate, wholesale and technology solutions under one integrated
              ecosystem designed to deliver seamless experiences for travellers,
              businesses and partners worldwide.
            </p>

            <div className={styles.services}>
              {services.map((service, index) => (
                <div key={service} className={styles.service}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
