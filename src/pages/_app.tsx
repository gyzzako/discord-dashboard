import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <p>Developed by GyzzakO</p>
      </footer>
    </>
  )
}

export default MyApp
