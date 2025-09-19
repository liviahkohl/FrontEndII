'use client'
import { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
    const [show, setShow] = useState(false);
    return (
        <>
        <header className={styles.headerMobile}>
            <button onClick={() => {setShow(!show)}}>xxxxxx</button>
        {show &&

        <div style={{height: '100px', border:'2px solid black'}}>
           {/*<p>Mobile</p>*/}
           <Image src={'/images/olho.jpg'} height={50} width={50} alt='Imagem'></Image>
           <nav>

           </nav>
        </div>
        }       

        </header>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}><Link className={styles.link} href='/'>Home</Link></li>
                        <li className={styles.liMenu}><Link className={styles.link} href='/produto'>Produto</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produto'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produto'>Pesquisar</Link></li>
                            </ul>   
                        </li>
                                                
                    </ul>
                </nav>
            </header>

        </>
    )
}