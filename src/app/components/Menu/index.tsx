import Link from 'next/link'
import styles from './style.module.css'
 
export default function Nav() {
    return (
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', }}>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/Contato">Contato</Link></li>
          <li><Link href="https://www.mercadolivre.com.br/" target="_blank" >Mercado Livre</Link></li>
        </ul>
      </nav>
    );
  }
 
 

