import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="img/logo.png" alt="logo" />
      </div>
      <button className={styles.navToggle} aria-label="toggle navigation">
        <span className={styles.hamburger}></span>
      </button>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <a href="#home" className={styles.nav__link}>
              Home
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#services" className={styles.nav__link}>
              My Services
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#aboutme" className={styles.nav__link}>
              About Me
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#work" className={styles.nav__link}>
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
