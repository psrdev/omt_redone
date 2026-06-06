import styles from "./TravelEcosystem.module.css";

export default function TravelEcosystem() {
  return (
    <section className={styles.ecosystem}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.heading}>
            <h2>
              A Complete <br />
              <span>Travel</span> <br />
              <span>Ecosystem.</span>
            </h2>
          </div>

          <div className={styles.copy}>
            <p>
              Founded on the belief that travel should be seamless, inspiring,
              and accessible, OutMazed Tourism combines industry expertise,
              technology, and a passion for service excellence to create
              meaningful travel experiences.
            </p>

            <p>
              From leisure holidays and corporate travel to visa services and
              wholesale tourism solutions, the company provides a comprehensive
              ecosystem designed to meet the evolving needs of modern travelers.
            </p>
          </div>

          <div className={styles.copy}>
            <p>
              What sets OutMazed Tourism apart is its ability to bring together
              multiple travel-related services under one integrated ecosystem.
              Rather than operating as independent entities, each brand
              complements the others to create a seamless and comprehensive
              experience for customers and partners.
            </p>

            <p>
              Whether a customer requires a holiday package, visa assistance,
              corporate travel support, destination management services, or
              technology-enabled travel solutions, OutMazed Tourism offers
              access to specialized expertise through a single trusted group.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
