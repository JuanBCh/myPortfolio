"use client";

import styles from "./work.module.css";
import projects from "../../../app/projects.json";
import Link from "next/link";

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
        {projects.map((p, k) => {
          return (
            <Link
              href={`/projects/${k}`}
              key={k}
              className={styles.portfolio__item}
            >
              <img
                src={p.imgs[0]}
                alt={`${p.title[0]} ${p.title[1] ? p.title[1] : undefined}`}
                className={styles.portfolio__img}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
