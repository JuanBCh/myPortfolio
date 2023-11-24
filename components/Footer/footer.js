import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="mailto:jachiappara@gmail.com" className={styles.footer__link}>
        jachiappara@gmail.com
      </a>
      <ul className={styles.socialList}>
        <li className={styles.socialList__item}>
          <a
            className={styles.socialList__link}
            href="https://www.linkedin.com/in/juanbagnasco/"
          >
            <FontAwesomeIcon icon={""} style={{ color: "#16e0bd" }} />
          </a>
        </li>
        <li className={styles.socialList__item}>
          <a
            className={styles.socialList__link}
            href="https://github.com/JuanBCh"
          >
            <img src="Img/github.svg" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
