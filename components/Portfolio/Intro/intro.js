import styles from "./intro.module.css";

function Intro() {
  return (
    <section className={styles.intro} id="home">
      <h1 className={`${styles.section__title} ${styles.section__titleIntro}`}>
        Hi, I am <strong>Juan Bagnasco</strong>
      </h1>
      <p
        className={`${styles.section__subtitle} ${styles.section__subtitleIntro}`}
      >
        FullStack Web Developer
      </p>
      <img
        src="img/juanBag.JPG"
        alt="a picture of Juan Bagnasco"
        className={styles.intro__img}
      />
    </section>
  );
}

export default Intro;
