"use client";

import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    { href: "#home", text: "Home" },
    { href: "#services", text: "MyServices" },
    { href: "#aboutme", text: "About Me" },
    { href: "#work", text: "My Work" },
  ];

  return (
    <header
      className={`${styles.header} ${!showMenu ? undefined : styles.navOpen}`}
    >
      <div className={styles.logo}>
        <img src="img/logo.png" alt="logo" />
      </div>
      <button
        className={styles.navToggle}
        onClick={() => setShowMenu(!showMenu)}
        aria-label="toggle navigation"
      >
        <span className={styles.hamburger}></span>
      </button>
      {!showMenu ? undefined : (
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {navItems.map((item, k) => {
              return (
                <li
                  key={k}
                  className={styles.nav__item}
                  onClick={() => setShowMenu(false)}
                >
                  <a href={item.href} className={styles.nav__link}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
