'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/Header"
import Image from "next/image";

export default function Biografia() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.card}>
          <h2 className={styles.title}>Biografia — Gilberto Gil</h2>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/gilbertogil.webp"
              alt="Gilberto Gil"
              width={250}
              height={400}
              className={styles.bioImage}
              priority
            />
          </div>

          <p className={styles.paragraph}>
            Gilberto Gil (nascido em 26 de junho de 1942 em Salvador, BA) é cantor,
            compositor e multi-instrumentista. Figura central do movimento Tropicalista,
            Gil construiu uma carreira que mescla MPB, influências africanas, reggae,
            rock e pop. Foi Ministro da Cultura do Brasil entre 2003 e 2008.
          </p>
          <p className={styles.paragraph}>
            Esta página traz um resumo e links para duas obras em destaque: <strong>Refavela</strong>
            (1977) e <strong>Luar (A Gente Precisa Ver o Luar)</strong> (1981).
          </p>
          <div className={styles.buttonGroup}>
            <a href="/Luar" className={styles.buttonBlue}>Ver Luar</a>
            <a href="/refavela" className={styles.buttonGreen}>Ver Refavela</a>
          </div>
        </section>

        <section className={styles.timelineSection}>
          <h3 className={styles.subtitle}>Linha do tempo resumida</h3>
          <ul className={styles.timeline}>
            <li>
              <strong>1942</strong>
              <em>Nascimento em Salvador</em>
            </li>
            <li>
              <strong>1967–68</strong>
              <em>Tropicalismo</em>
            </li>
            <li>
              <strong>1970s</strong>
              <em>Exílio e influência africana</em>
            </li>
            <li>
              <strong>1977</strong>
              <em>Refavela</em>
            </li>
            <li>
              <strong>1981</strong>
              <em>Luar</em>
            </li>
            <li>
              <strong>2003–2008</strong>
              <em>Ministro da Cultura</em>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
