import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image src={logo} alt="Adaptando o projeto logo" />
        </Link>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Conteúdo</a>
          </ActiveLink>
          <ActiveLink href="/bout" activeClassName={styles.active}>
            <a>Quem somos</a>
          </ActiveLink>
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
