import Image from "next/image";
import styles from "./main.module.css";

function Main() {
  return (
    <main className={styles.main} id="main">
      <div>
        <p>Hola! Soy</p>
        <h1>Juan Bagnasco</h1>
        <p>y soy FullStack Developer</p>
      </div>
      <Image
        className={styles.image}
        src="/../public/foto_carnet.JPG"
        alt="My Picture"
        width={355}
        height={400}
      />
    </main>
  );
}
export default Main;
