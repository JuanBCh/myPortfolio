import Link from "next/link";
import styles from "./project.module.css";

export default function Project({ info }) {
  return (
    <>
      <section className={styles.intro}>
        <h1
          className={`${styles.section__title} ${styles.section__titleIntro}`}
        >
          {info.title[0]} <strong>{info.title[1]}</strong>
        </h1>
        <p
          className={`${styles.section__subtitle} ${styles.section__subtitleIntro}`}
        >
          {info.subtitle}
        </p>
        <img src={info.imgs[0]} alt="" className={styles.intro__img} />
      </section>

      <div className={styles.portfolioItemIndividual}>
        <p>{info.pars[0]}</p>
        <img src={info.imgs[1]} />
        {info.pars.map((p, k) => {
          return <p key={k}>{p}</p>;
        })}
        {!info.link ? undefined : (
          <p>
            You can visit it <Link href={info.link}>here!</Link>
          </p>
        )}
      </div>
    </>
  );
}
