import styles from "./aboutme.module.css";

function AboutMe() {
  return (
    <section className={styles.aboutme} id="aboutme">
      <h3>Sobre mi</h3>
      <p>
        Soy Juan Bagnasco, un desarrollador Fullstack de Uruguay con experiencia
        en proyectos de e-commerce y otras aplicaciones web. Mi formación
        incluye un bootcamp de FullStack Developer de 420 horas en Senpai
        Academy y actualmente estoy estudiando Ingeniería de la Computación en
        la Facultad de Ingeniería.
      </p>
      <p>
        Con 6 meses de experiencia en el desarrollo Fullstack, he desarrollado
        habilidades para aprender rápidamente nuevas tecnologías y adaptarme a
        ellas con facilidad, lo que me permite trabajar en una amplia gama de
        proyectos.
      </p>
      <p>
        Me apasiona el mundo del desarrollo de software, ya que nos brinda
        infinitas posibilidades para crear soluciones y herramientas que
        faciliten la vida de las personas. Siempre estoy buscando oportunidades
        para seguir aprendiendo y mejorando mis habilidades en el desarrollo
        Fullstack.
      </p>
      <p>
        En cuanto a mis objetivos a largo plazo, mi meta es seguir desarrollando
        mi carrera profesional en una empresa que me permita seguir creciendo
        como desarrollador y trabajar en equipo con otros profesionales que
        compartan mi pasión por el desarrollo de software.
      </p>
    </section>
  );
}

export default AboutMe;
