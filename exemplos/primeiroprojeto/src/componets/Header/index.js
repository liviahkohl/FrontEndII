import styles from './header.module.css';
import Link from 'next/link'


export default function Header() {
    return (
        <>
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