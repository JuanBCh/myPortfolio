import styles from "./header.module.css";

function Header() {
  let nav = [
    { title: "Home", href: "main" },
    { title: "About Me", href: "aboutme" },
    { title: "Skills", href: "skills" },
    { title: "Portfolio", href: "portfolio" },
    { title: "Contact", href: "contact" },
  ];
  return (
    <nav className={styles.header}>
      <p>{"<JB/>"}</p>
      <div>
        {nav.map((o, k) => {
          return (
            <a href={`#${o.href}`} key={k}>
              {o.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Header;
