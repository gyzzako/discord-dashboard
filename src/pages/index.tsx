import Head from 'next/head'
import { ReactElement } from 'react'
import { BaseLayout } from '../components/layout/base/Base'
import styles from '../styles/home.module.scss'
import { NextPageWithLayout } from '../utils/types'

const HomePage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discord dashboard</title>
        <meta name="description" content="Discord dashboard" />
      </Head>

    </div>
  )
}

HomePage.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}

export default HomePage
