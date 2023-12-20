"use client";

import styles from "./work.module.css";
import projects from "../../../app/projects.json";
import Link from "next/link";
import Image from "next/image";

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
              <Image
                src={p.imgs[0].ref}
                alt={`${p.title[0]} ${p.title[1] ? p.title[1] : undefined}`}
                className={styles.portfolio__img}
                width={p.imgs[0].width}
                height={p.imgs[0].height}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
