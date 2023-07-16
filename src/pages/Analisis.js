import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>List Analisis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div>
            <a href="/">
              <h3>Home</h3>
            </a>
          </div>
          <p>By Muhammad Nurharianto</p>
        </div>
        <h1>Trending Topik</h1>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/Logo_3.png"
            alt="Next.js Logo"
            width={250}
            height={250}
            priority
          />
        </div>
        <h3>Pilih topik:</h3>
        <br />
        <ul>
          <div className={styles.card}>
            <li>
              <a
                href={`/posts/BSI_Mobile`}
                target="_blank"
                rel="noopener noreferrer"
              >
                BSI mobile
              </a>
            </li>
          </div>
          <div className={styles.card}>
            <li>
              <a
                href={`/posts/Calo_Tiket`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Calo Tiket
              </a>
            </li>
          </div>
          <div className={styles.card}>
            <li>
              <a
                href={`/posts/Messi`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Messi
              </a>
            </li>
          </div>
        </ul>
      </main>
    </>
  );
}
