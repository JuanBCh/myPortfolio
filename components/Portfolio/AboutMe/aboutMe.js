import styles from "./abuoutMe.module.css";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className={styles.aboutMe} id="aboutme">
      <h2 className={`${styles.section__title} ${styles.section__titleAbout}`}>
        Who I am
      </h2>
      <p
        className={`${styles.section__subtitle} ${styles.section__subtitleAbout}`}
      >
        Developer and IT passionate
      </p>
      <div className={styles.aboutMe__body}>
        <p>
          I am Juan Bagnasco, a Fullstack developer from Uruguay with experience
          in e-commerce projects and other web applications. My training
          includes a 420-hour FullStack Developer bootcamp at Senpai Academy,
          and I'm currently studying Computer Engineering degree.
        </p>
        <p>
          I'm passionate about the world of software development as it provides
          endless possibilities to create solutions and tools that make people's
          lifes easier. I am always looking for opportunities to continue
          learning and improving my skills in Fullstack development.
        </p>
      </div>
      <Image
        src="/img/juanBag2.JPG"
        alt="Image playing guitar"
        width={756}
        height={1065}
        className={styles.aboutMe__img}
      />
    </section>
  );
}
