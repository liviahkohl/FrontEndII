'use client'
import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Refavela() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.card}>
          <h2 className={styles.title}>Refavela — 1977</h2>

          <div className={styles.albumWrapper}>
            <Image
              src="/images/refavela.png"
              alt="Capa do álbum Refavela"
              width={280}
              height={280}
              className={styles.albumImage}
              priority
            />
          </div>

          <p className={styles.paragraph}>
            <strong>Lançamento:</strong> 1977 (Philips)
          </p>
          <p className={styles.paragraph}>
            A ideia de gravar <em>Refavela</em> nasceu após Gilberto Gil ter participado 
            do 2° Festival Mundial de Arte e Cultura Negra (FESTAC 77), em Lagos, na Nigéria, 
            no começo de 1977. Gil voltou da Nigéria com a proposta de um álbum inspirado na 
            ancestralidade africana, dialogando também com afrobeat, juju music, funk, reggae 
            e a música afro-baiana dos blocos carnavalescos de Salvador, como Ilê Aiyê e Filhos de Gandhy.
            <br/><br/>
            Destaques incluem <em>Ilê Ayê</em>, <em>Balafon</em>, <em>Babá Alapalá</em>, 
            <em>Patuscada de Gandhi</em> e uma versão samba-funk de <em>Samba do Avião</em>, de Tom Jobim.
          </p>

          <section className={styles.tracksSection}>
            <h3 className={styles.subtitle}>Faixas em destaque</h3>
            <div className={styles.tracksGrid}>

              <div className={styles.trackCard}>
                <Image
                  src="/images/refavela.png"
                  alt="Refavela"
                  width={250}
                  height={250}
                  className={styles.trackImage}
                />
                <p className={styles.trackTitle}>Refavela</p>
                <a
                  href="https://www.youtube.com/watch?v=6cqcr_19TDg&list=RD6cqcr_19TDg&start_radio=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackLink}
                >
                  ▶ Ouvir agora
                </a>
              </div>

              <div className={styles.trackCard}>
                <Image
                  src="/images/ileaye.jpg"
                  alt="Ilê Ayê"
                  width={250}
                  height={250}
                  className={styles.trackImage}
                />
                <p className={styles.trackTitle}>Ilê Ayê</p>
                <a
                  href="https://www.youtube.com/watch?v=RnDO0PbsWlQ&list=RDRnDO0PbsWlQ&start_radio=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackLink}
                >
                  ▶ Ouvir agora
                </a>
              </div>

              <div className={styles.trackCard}>
                <Image
                  src="/images/babaalapala.jpg"
                  alt="Babá Alapalá"
                  width={250}
                  height={250}
                  className={styles.trackImage}
                />
                <p className={styles.trackTitle}>Babá Alapalá</p>
                <a
                  href="https://www.youtube.com/watch?v=0rmhIc6uNKw&list=RD0rmhIc6uNKw&start_radio=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trackLink}
                >
                  ▶ Ouvir agora
                </a>
              </div>

            </div>
          </section>

          <section>
            <h3 className={styles.subtitle}>Produção e músicos</h3>
            <p className={styles.paragraph}>
              Arranjos com destaque para metais e percussão.  
              Participações de músicos como <strong>Perinho Santana</strong> e 
              <strong> J. T. Meirelles</strong> nas seções de sopro e arranjos.
            </p>
            <p className={styles.paragraph}>
              <small>(Veja encarte/discogs para créditos completos.)</small>
            </p>
          </section>

          <div className={styles.buttonGroup}>
            <Link href="/" className={styles.buttonBack}>← Voltar para Biografia</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
