import { BaseLayout } from '../components/layout/base/Base';
import '../styles/globals.scss'
import { AppPropsWithLayout } from '../utils/types'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp
