import Href from "../../Utilities/Button.js/button";
import styles from "./services.module.css";

export default function Services() {
  return (
    <section className={styles.myServices} id="services">
      <h2
        className={`${styles.section__title} ${styles.section__titleServices}`}
      >
        What I do
      </h2>
      <div className={styles.services}>
        <div className={styles.service}>
          <h3>Front End</h3>
          <p>
            Front End developer with expertise in HTML, CSS, JavaScript and
            Next.js. Specialized in crafting dynamic and efficient web
            interfaces. Collaborate closely with designers to implement precise
            technical solutions, focusing on code quality and user experience.
          </p>
        </div>
        <div className={styles.service}>
          <h3>Back End</h3>
          <p>
            Backend: Full Stack developer with specialization in Node.js and
            Express.js. Extensive experience in efficient database management
            using PostgreSQL and versatile API development. Focus on performance
            optimization and a commitment to staying updated with the latest
            technologies for delivering innovative solutions.
          </p>
        </div>
        <div className={styles.service}>
          <h3>Learn</h3>
          <p>
            Passionate about continuous learning, I find inspiration and
            curiosity in the topics I engage with while working. My practical
            approach is reflected in my ability to assimilate and apply
            knowledge simultaneously, firmly believing that practice is the best
            friend of memory and effective learning.
          </p>
        </div>
      </div>
      <Href link="#work" className={styles.btn} text="See my work" />
    </section>
  );
}
