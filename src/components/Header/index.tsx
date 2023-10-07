import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image src={logo} alt="Adaptando o projeto logo" />
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/posts">Conteúdos</Link>
          <Link href="/about">Quem somos</Link>
        </nav>
        <a
          className={styles.readyButton}
          type="button"
          href="https://globoesporte.globo.com"
        >
          Começar
        </a>
      </div>
    </header>
  );
}
