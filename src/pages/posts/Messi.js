import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Messi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Image
            className={styles.logo}
            src="/Logo_3.png"
            alt="Next.js Logo"
            width={150}
            height={150}
            priority
          />
          <div>
            <a
              href="https://www.linkedin.com/in/muh-nur-746571216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By <h3>Muhammad Nurharianto </h3>
            </a>
          </div>
        </div>
        <div className={styles.grid}>
          <div
            className={styles.card}
            rel="noopener noreferrer"
            potition="center"
          >
            <h1>Messi</h1>
          </div>
        </div>
        <div className={styles.grud}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Tanggal Trending</h3>
            <p>10-11 Juni 2023</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Tweet</h3>
            <p>7442</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Deskripsi</h3>
            <p>
              Muncul Rumor mengejutkan yang mengatakan bahwa Lionel Messi dia
              tidak akan main bersama argentina melawan timnas indonesia,
              walaupun masih bersifat rumor, namun sudah banyak netizen yang
              memperbincangkan hal ini di twitter yang percaya akan berita ini.
            </p>
          </a>
        </div>
        <br />
        <br />
        <div className={styles.card} target="_blank" rel="noopener noreferrer">
          <div
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>User Pertama yang membuat trending</h3>
          </div>
          <div className={styles.grid}>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Username</h3>
              <p>idextratime</p>
            </a>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Id</h3>
              <p>1222927522033094656</p>
            </a>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Waktu Posting</h3>
              <p>2023-06-10 13:14:45+00:00</p>
            </a>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Text</h3>
              <p>
                🚨 BREAKING: Lionel Messi hanya akan memainkan pertandingan
                pertama melawan Australia di Beijing, namun TIDAK IKUT ke
                Indonesia pada 19 Juni. 📝 @leoparadizo Semoga ga bener
                😭😭😭😭😭😭 https://t.co/oPKRjTEyoC
              </p>
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className={styles.card} target="_blank" rel="noopener noreferrer">
          <div
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>User yang paling berdampak</h3>
          </div>
        </div>
        <div className={styles.grud}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Username</h3>
            <p>idextratime</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Id</h3>
            <p>1222927522033094656</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Retweet</h3>
            <p>1995</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Like</h3>
            <p>16729</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Replay</h3>
            <p>3640</p>
          </a>
        </div>
        <div className={styles.card} target="_blank" rel="noopener noreferrer">
          <h3>Text</h3>
          <p>
            🚨 BREAKING: Lionel Messi hanya akan memainkan pertandingan pertama
            melawan Australia di Beijing, namun TIDAK IKUT ke Indonesia pada 19
            Juni. 📝 @leoparadizo Semoga ga bener 😭😭😭😭😭😭
            https://t.co/oPKRjTEyoC
          </p>
        </div>

        <div className={styles.grud}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Username</h3>
            <p>tanyarlfes</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Id</h3>
            <p>1371650588</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Retweet</h3>
            <p>1808</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Like</h3>
            <p>37172</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Replay</h3>
            <p>1569</p>
          </a>
        </div>
        <div className={styles.card} target="_blank" rel="noopener noreferrer">
          <h3>Text</h3>
          <p>💚 ❌ Ditipu calo ✅ Ditipu bang messi https://t.co/14a0MTisra</p>
        </div>

        <div className={styles.grud}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Username</h3>
            <p>jek___</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Id</h3>
            <p>385996689</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Retweet</h3>
            <p>1058</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Like</h3>
            <p>18819</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Replay</h3>
            <p>538</p>
          </a>
        </div>
        <div className={styles.card} target="_blank" rel="noopener noreferrer">
          <h3>Text</h3>
          <p>
            pinter ya. setelah tiket sold out, baru keluar pengumuman kalo messi
            batal ikut ke indonesia hahahaha untung tiketnya 4 jutaan doang ini.
            giveawayin aja kali y
          </p>
        </div>

        <div className={styles.card}>
          <Image
            className={styles.logoContainer}
            src="/Messi Tidak Jadi ke Indonesia.png"
            alt="Next.js Logo"
            width={400}
            height={250}
            priority
            float="right"
          />
        </div>
      </main>
    </>
  );
}
