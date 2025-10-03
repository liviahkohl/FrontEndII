'use client'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>Criado por <span className={styles.autor}>Ana Lívia Kohl</span></p>
        <p>&copy; 2025 - Todos os direitos reservados</p>

        <div className={styles.social}>
          <Link href="https://github.com/liviahkohl" target="_blank">
            <Image 
              src="/images/github.png" 
              alt="GitHub" 
              width={24} 
              height={24} 
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}