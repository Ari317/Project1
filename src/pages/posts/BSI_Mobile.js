import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Post() {
  const [showNavigation, setShowNavigation] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const navigationRef = useRef(null);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navigationElement = navigationRef.current;
      if (navigationElement) {
        const rect = navigationElement.getBoundingClientRect();
        const isVisible = rect.top >= 0;
        setButtonVisible(!isVisible);
      }
    };
    // Tambahkan event listener saat komponen dipasang
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen dilepas
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>BSI Mobile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Tombol Minimize/Expand Navigation */}
      <button
        className={`${styles["minimize-button"]} ${
          showNavigation ? "" : styles["minimized"]
        }`}
        onClick={toggleMinimize}
      >
        {isMinimized ? "Expand Navigation" : "Minimize Navigation"}{" "}
        <span className={styles.arrow}>{isMinimized ? "▼" : "▲"}</span>
      </button>

      <div
        ref={navigationRef}
        className={`${styles.navigation} ${
          showNavigation ? "" : styles["minimized"]
        }`}
      >
        {showNavigation && (
          <div className={styles.navigation}>
            <a href="#User">User Pertama yang memicu trending</a>
            <a href="#User2">User yang paling berkontribusi</a>
            <a href="#User3">Persebaraan data</a>
          </div>
        )}
      </div>

      <main
        className={`${styles.main} ${inter.className} ${
          showNavigation ? "" : styles.showNavigation
        }`}
      >
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
            <h1>BSI Mobile</h1>
          </div>
        </div>
        <br />

        <div className={styles.grud}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Tanggal Trending</h3>
            <p>7-8 Mei 2023</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Tweet</h3>
            <p>1320</p>
          </a>
          <div
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Deskripsi</h3>
            <p>
              Terjadi error server pada aplikasi BSI mobile sehingga aplikasi
              tidak dapat berfungsi secara baik
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className={styles.card} target="_blank" rel="noopener noreferrer">
          <div
            id="User"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>User Pertama yang memicu trending</h3>
          </div>
          <div className={styles.grid}>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Username</h3>
              <p>KimTzuyu1406</p>
            </a>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Id</h3>
              <p>1655335707928580000</p>
            </a>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Waktu Posting</h3>
              <p>Sun May 07 22:16:02 +0000 2023</p>
            </a>
            <a
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Text</h3>
              <p>BSI Mobile kenapa sihh? @bankbsi_id https://t.co/XqhksQ00BM</p>
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className={styles.card} target="_blank" rel="noopener noreferrer">
          <div
            id="User2"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>User yang paling berkontribusi</h3>
          </div>
        </div>
        <div className={styles.grud}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Username</h3>
            <p>bankbsi_id</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Id</h3>
            <p>141500996</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Reetweet</h3>
            <p>242</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Like</h3>
            <p>716</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Replay</h3>
            <p>2308</p>
          </a>
        </div>
        <div className={styles.grud} target="_blank" rel="noopener noreferrer">
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Text</h3>
            <p>
              Assalamu'alaikum Wr. Wb, Sahabat Syariah! nnKami sampaikan saat
              ini BSI tengah melakukan maintenance system dan akan kembali ke
              kondisi normal secepatnya. nnKami menyampaikan permohonan maaf
              kepada nasabah atas ketidaknyamanannya dalam melalukan transaksi
              keuangan pada hari ini. https://t.co/V670IzNGp3
            </p>
          </a>
        </div>

        <div className={styles.grud}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Username</h3>
            <p>irtikcantik</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Id</h3>
            <p>1655718813952880000</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Reetweet</h3>
            <p>101</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Like</h3>
            <p>37</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Replay</h3>
            <p>138</p>
          </a>
        </div>
        <div className={styles.grud} target="_blank" rel="noopener noreferrer">
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Text</h3>
            <p>
              Iya wa'alaikumussalam\nBSI mobile, aku udah kepikiran ganti bank
              lain loh ini lg riset. 24jam lebih gabisa dipake, tarik tunai ATM
              maupun teller juga gabisa. Kembalikan BNI Syariah kesayanganku
              bisa ga? Sejak ganti jd BSI makin ribet. https://t.co/LnoNYcjxcx
            </p>
          </a>
        </div>
        <div className={styles.grud}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Username</h3>
            <p>wahsur</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Id</h3>
            <p>84007270</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Reetweet</h3>
            <p>32</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Like</h3>
            <p>7</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Replay</h3>
            <p>16</p>
          </a>
        </div>
        <div className={styles.grud} target="_blank" rel="noopener noreferrer">
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Text</h3>
            <p>
              Gangguan hari Senin 8 Mei 2023 dari pagi sampai waktu yang belum
              ditentukan.nBSI MOBILE ERROR Connection Timeout, Ke Bank enggak
              bisa ambil tunai karena alasan belum online, ATM juga enggak
              bisa...nAstagfirullah. Lagi darurat ginin@bankbsi_id
              https://t.co/IWS7V3C7Hj
            </p>
          </a>
        </div>

        <div className={styles.grud}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Username</h3>
            <p>KimTzuyu1406</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Id</h3>
            <p>1655335707928580000</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Reetweet</h3>
            <p>28</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Like</h3>
            <p>7</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Replay</h3>
            <p>112</p>
          </a>
        </div>
        <div className={styles.grud} target="_blank" rel="noopener noreferrer">
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Text</h3>
            <p>BSI Mobile kenapa sihh? @bankbsi_id https://t.co/XqhksQ00BM</p>
          </a>
        </div>

        <div className={styles.grod}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Username</h3>
            <p>DanyYar</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Id</h3>
            <p>1655335707928580000</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Reetweet</h3>
            <p>12</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Like</h3>
            <p>33</p>
          </a>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Jumlah Replay</h3>
            <p>42</p>
          </a>
        </div>
        <div className={styles.grud} target="_blank" rel="noopener noreferrer">
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3>Text</h3>
            <p>
              BSI lagi error gaes tgl 8 mei ini.n#bsimobile
              https://t.co/YI3ydHUFPo
            </p>
          </a>
        </div>
        <div id="User3" className={styles.card}>
          <Image
            className={styles.logoContainer}
            src="/BSI Mobile.png"
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
