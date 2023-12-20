import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  const myDoc = {};

  return (
    <footer className={styles.footer}>
      <Link href="mailto:jachiappara@gmail.com" className={styles.footer__link}>
        jachiappara@gmail.com
      </Link>
      <ul className={styles.socialList}>
        <li className={styles.socialList__item}>
          <Link
            href="https://www.linkedin.com/in/juanbagnasco/"
            target="_blank"
            className={styles.socialList__link}
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#16e0bd" }} />
          </Link>
        </li>
        <li className={styles.socialList__item}>
          <Link
            href="https://github.com/JuanBCh"
            target="_blank"
            className={styles.socialList__link}
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#16e0bd" }} />
          </Link>
          <Link
            href="https://wa.me/+59899933342"
            target="_blank"
            className={styles.socialList__link}
          >
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#16e0bd" }} />
          </Link>
        </li>
      </ul>
      <p>
        Also, you can see my CV{" "}
        <Link
          href="https://drive.google.com/file/d/1dk_ZhtWd7v6fEcPyW_9-jy44oRYunhY8/view?usp=drive_link"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          here!
        </Link>
      </p>
    </footer>
  );
}
