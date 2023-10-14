import Head from "next/head";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import thumbImg from "../../../public/images/thumb.png";
export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog | treinando next</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/">
            <Image
              src={thumbImg}
              alt="alternative text"
              width={720}
              height={410}
              quality={100}
            />
            <strong>Criação de app</strong>
            <time> 14 de julho de 2021</time>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              esse modi voluptatum numquam molestias voluptate quia.{" "}
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
