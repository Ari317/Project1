import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getRequest } from "./api/db.js";

export default function Home() {
  return (
    <div>
      {" "}
      <button onClick={getRequest}>Get Request</button>className={styles.card};
    </div>
  );
}
