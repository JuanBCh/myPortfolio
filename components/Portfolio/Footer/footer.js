import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="mailto:jachiappara@gmail.com" className={styles.footer__link}>
        jachiappara@gmail.com
      </a>
      <ul className={styles.socialList}>
        <li className={styles.socialList__item}>
          <a
            href="https://www.linkedin.com/in/juanbagnasco/"
            target="_blank"
            className={styles.socialList__link}
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#16e0bd" }} />
          </a>
        </li>
        <li className={styles.socialList__item}>
          <Link
            href="https://github.com/JuanBCh"
            target="_blank"
            className={styles.socialList__link}
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#16e0bd" }} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
