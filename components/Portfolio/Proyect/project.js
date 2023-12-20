import Link from "next/link";
import styles from "./project.module.css";
import Image from "next/image";

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
        <Image
          src={info.imgs[0].ref}
          alt=""
          className={styles.intro__img}
          width={info.imgs[0].width}
          height={info.imgs[0].height}
        />
      </section>

      <div className={styles.portfolioItemIndividual}>
        <p className={styles.portfolioItemIndividual__par}>{info.pars[0]}</p>
        <Image
          src={info.imgs[1].ref}
          width={info.imgs[1].width}
          height={info.imgs[1].height}
        />
        {info.pars.map((p, k) => {
          if (k === 0) return undefined;
          return (
            <p key={k} className={styles.portfolioItemIndividual__par}>
              {p}
            </p>
          );
        })}
        {!info.link ? undefined : (
          <p className={styles.portfolioItemIndividual__par}>
            You can visit it{" "}
            <Link href={info.link} target="_blank">
              here!
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
