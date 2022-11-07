import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Topbar from '../components/TopBar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Felium</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />
      <Header />
    </div>
  )
}
