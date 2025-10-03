'use client'
import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Luar() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <section className={styles.card}>
          <h2 className={styles.title}>Luar (A Gente Precisa Ver o Luar) — 1981</h2>
          <div className={styles.albumWrapper}>
            <Image
              src="/images/luar.jpg"
              alt="Capa do álbum Luar"
              width={280}
              height={280}
              className={styles.albumImage}
              priority
            />
          </div>


          <p className={styles.paragraph}>
            <strong>Lançamento:</strong> 1981 (Warner)
          </p>
          <p className={styles.paragraph}>
            A incursão pop de Gil em <em>Realce</em> prossegue em <strong>Luar (A Gente Precisa Ver o Luar)</strong>, 
            onde o cantor transita por funk, reggae e pop. O álbum começa com a faixa-título e seu irresistível 
            ritmo dançante baseado na disco music. Gravada antes pela banda A Cor do Som, embora seja uma canção 
            de Gilberto Gil, <em>Palco</em> aparece neste álbum numa versão interessante em que há uma conexão muito 
            bem construída entre o funk ao estilo Earth, Wind and Fire com um ritmo ijexá diluído numa estilização pop. 
            Na lindíssima <em>Se Eu Quiser Falar Com Deus</em>, Gil busca estabelecer uma conversa mais íntima e sincera 
            com o Altíssimo. O disco ainda tem outras canções famosas como <em>Cores Vivas</em> e <em>Pela Lente do Amor</em>.
          </p>


<section className={styles.tracksSection}>
  <h3 className={styles.subtitle}>Faixas em destaque</h3>
  <div className={styles.tracksGrid}>
    
    <div className={styles.trackCard}>
      <Image
        src="/images/luar.jpg"
        alt="A Gente Precisa Ver o Luar"
        width={250}
        height={250}
        className={styles.trackImage}
      />
      <p className={styles.trackTitle}>A Gente Precisa Ver o Luar</p>
      <a 
        href="https://www.youtube.com/watch?v=qf3yn_egk9w&list=RDqf3yn_egk9w&start_radio=1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.trackLink}
      >
        ▶ Ouvir agora
      </a>
    </div>

    <div className={styles.trackCard}>
      <Image
        src="/images/palco.jpg"
        alt="Palco"
        width={250}
        height={250}
        className={styles.trackImage}
      />
      <p className={styles.trackTitle}>Palco</p>
      <a 
        href="https://www.youtube.com/watch?v=ou78Tuy_MNM&list=RDou78Tuy_MNM&start_radio=1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.trackLink}
      >
        ▶ Ouvir agora
      </a>
    </div>

    <div className={styles.trackCard}>
      <Image
        src="/images/seeuquiserfalarcomDeus.jpg"
        alt="Se Eu Quiser Falar com Deus"
        width={250}
        height={250}
        className={styles.trackImage}
      />
      <p className={styles.trackTitle}>Se Eu Quiser Falar com Deus</p>
      <a 
        href="https://www.youtube.com/watch?v=SUPovEQqrjg&list=RDSUPovEQqrjg&start_radio=1" 
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
              Produção com participação de <strong>Liminha</strong> e arranjos de <strong>Lincoln Olivetti</strong> em algumas faixas.
            </p>
            <p className={styles.paragraph}>
              <small>(Consulte a discografia para ficha técnica completa.)</small>
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
