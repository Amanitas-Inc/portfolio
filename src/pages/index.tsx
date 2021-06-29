import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>

      <main className={styles.main}>
        <h1> Hello world</h1>
      </main>
    </div>
  )
}
