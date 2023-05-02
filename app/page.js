import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/portfolio";
import Skills from "./components/skils/skills";
import styles from "./page.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;
