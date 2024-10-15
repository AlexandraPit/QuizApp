import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quizz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome to my Quiz App!</h1>

        <h3 className={styles.description}>
          Get started by choosing your <Link className="{styles.title Link}" href="/categories">category!</Link>
        </h3>
      </main>
    </div>
  );
}
