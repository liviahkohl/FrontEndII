import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.divpai}>
      <h1>Hello word!</h1>
      <p className={styles.paragrafo}>Paragrafo</p>
    </div>
  );
}
