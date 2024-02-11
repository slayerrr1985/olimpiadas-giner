import Head from "next/head";
import styles from "../styles/styles.module.scss";
// import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olimpiadas Giner de los Ríos</title>
        <meta name="description" content="Gamificación GDR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <div className={styles.home__title}>Olimpiadas Giner de los Ríos</div>
        <div className={styles.home__item}>
          <Link href="/votaciones/ranking">Ranking</Link>
        </div>
        <div className={styles.home__item}>
          <Link href="/sandbox/test">Sandbox</Link>
        </div>

        {/* <Button /> */}
      </main>
    </>
  );
}
