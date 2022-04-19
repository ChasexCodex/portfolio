import Head from 'next/head'

import type {AppProps} from 'next/app'
import '../styles/globals.css'
import ScreenSize from '../components/ScreenSize'

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-50 dark:bg-black">
      {/*<InteractiveBackground/>*/}
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="z-10 flex-1 container mx-auto flex flex-col justify-center mt-4 py-2 lg:py-4">
        <Component {...pageProps} />
      </main>
      {process.env.useScreenSize === 'true' && <ScreenSize/>}
    </div>
  )
}
