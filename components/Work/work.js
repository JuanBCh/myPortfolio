import styles from "./work.module.css";

export default function Work() {
  return (
    <section className={styles.myWork} id="work">
      <h2 className={`${styles.section__title} ${styles.section__titleWork}`}>
        My Work
      </h2>
      <p
        className={`${styles.section__subtitle} ${styles.section__subtitleWork}`}
      >
        A selection of my range of work
      </p>
      <div className={styles.portfolio}>
        <a href="#" className={styles.portfolio__item}>
          <img src="#" alt="" className={styles.portfolio__img} />
        </a>
        <a href="#" className={styles.portfolio__item}>
          <img src="#" alt="" className={styles.portfolio__img} />
        </a>
        <a href="#" className={styles.portfolio__item}>
          <img src="#" alt="" className={styles.portfolio__img} />
        </a>
      </div>
    </section>
  );
}
