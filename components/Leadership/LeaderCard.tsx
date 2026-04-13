import { motion } from "framer-motion";
import { cardHover, fadeUp, stagger } from "../../utils/motion";
import Image from "next/image";
export default function LeaderCard({
  image,
  name,
  role,
  badges,
  content,
  col,
}: any) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover="hover"
      className={`col-lg-${col || 3}`}
    >
      <div className="leaderCard h-100 text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="leaderImageWrapper mb-3">
            <Image src={image} alt={name} width={200} height={200} />
          </div>

          {/* NAME */}
          <h3>{name}</h3>
          <p>{role}</p>

          {/* BADGES */}
          <div className="custom-badge">
            {badges.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="leaderContent">
          {content.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
