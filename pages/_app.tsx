import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import  { SessionProvider } from 'next-auth/react'

import Header from '../components/header'
import AuthWrapper from '../components/authwrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        <Header />
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  )
}

export default MyApp