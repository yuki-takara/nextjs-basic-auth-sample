import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'

import basicAuthCheck from '../src/utils/basicAuthCheck'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req, res } = appContext.ctx
  if (req && res && process.env.ENABLE_BASIC_AUTH === 'true') {
    await basicAuthCheck(req, res)
  }

  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
