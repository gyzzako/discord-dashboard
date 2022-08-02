import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discord dashboard</title>
        <meta name="description" content="Discord dashboard" />
      </Head>

    </div>
  )
}

export default Home
