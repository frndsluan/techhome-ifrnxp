import styles from "./MyHeader.module.css";
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "../assets/imgs/image.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Logo - Agora em escala maior */}
        <Link to="/" className={styles.logoContainer}>
          <img src={logoImg} alt="TECHHOME" className={styles.logoImage} />
        </Link>

        {/* Barra de Busca - Mais robusta */}
        <div className={styles.searchBar}>
          <Search size={24} className={styles.searchIcon} />
          <input type="text" placeholder="Pesquisar..." />
        </div>

        {/* Links - Fonte maior e mais espaçamento */}
        <nav className={styles.navLinks}>
          <Link to="/">LOJA DE GAMES</Link>
          <Link to="/">LOJA DE PEÇAS</Link>
          <Link to="/">SOBRE NÓS</Link>
        </nav>

        {/* Seção de Login - Ícone e textos ampliados */}
        <div className={styles.authSection}>
          <div className={styles.divider}></div>
          <User size={36} className={styles.userIcon} />
          <div className={styles.authText}>
            <span>ENTRE OU</span>
            <strong>CADASTRE-SE</strong>
          </div>
        </div>

      </div>
    </header>
  );
}