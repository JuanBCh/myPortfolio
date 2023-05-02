import styles from "./aboutme.module.css";

function AboutMe() {
  return (
    <section className={styles.aboutme} id="aboutme">
      <h3>Sobre mi</h3>
      <p>
        Estudio informatica, bla bla, hice tal bootcamp blabla, estoy trabajando
        medio tiempo blabla haciendo tal y cual, tengo tales proyectos con tales
        personas, blabla
      </p>
    </section>
  );
}

export default AboutMe;
