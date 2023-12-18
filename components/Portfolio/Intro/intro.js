import styles from "./intro.module.css";
import Image from "next/image";

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
      <Image
        src="/img/juanBag.JPG"
        alt="A picture of Juan Bagnasco"
        width={790}
        height={907}
        className={styles.intro__img}
      />
    </section>
  );
}

export default Intro;
