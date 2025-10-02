'use client'
import { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className={styles.headerMobile}>
        <button
          className={`${styles.mobileButton} ${show ? styles.open : ''}`}
          onClick={() => setShow(!show)}
          aria-label="Abrir/Fechar menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={styles.logoMobile}>Gilberto Gil</div>

        {show && (
          <div className={styles.mobileMenu}>
            <nav>
              <ul className={styles.ulMenuMobile}>
                <li><Link className={styles.link} href="/">Home</Link></li>
                <li><Link className={styles.link} href="/Luar">Luar</Link></li>
                <li><Link className={styles.link} href="/refavela">Refavela</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </header>
      {/* Header Desktop */}
      <header className={styles.header}>
        <div className={styles.logo}>Gilberto Gil</div>
        <nav>
          <ul className={styles.ulMenu}>
            <li className={styles.liMenu}>
              <Link className={styles.link} href="/">Home</Link>
            </li>
            <li className={styles.liMenu}>
              <Link className={styles.link} href="#">Álbuns</Link>
              <ul className={styles.ulSubMenu}>
                <li className={styles.liSubMenu}><Link className={styles.link} href="/Luar">Luar</Link></li>
                <li className={styles.liSubMenu}><Link className={styles.link} href="/refavela">Refavela</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
