//import Image from "next/image";

'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  //let cont = 0;
  const [cont, setCont] = useState(0)

  const Subtrair = () => {
    setCont(cont-1);
    console.log(cont);
  }

  const Adicionar = () => {
    setCont(cont+1);
    console.log(cont);
  }

  return (
    <div className={styles.divpai}>
      <h1>Home!</h1>
      <p className={styles.paragrafo}>Paragrafo</p>
      <button className={styles.button} onClick={() => {Adicionar()}}>Adicionar</button>
      <button className={styles.button} onClick={() => {Subtrair()}}>Subtrair</button>
      <p>Contagem: {cont}</p>
    </div>
  );
}
