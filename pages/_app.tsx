import Head from 'next/head'
import Image from 'next/image'

import type {AppProps} from 'next/app'
import '../styles/globals.css'
import ScreenSize from '../components/ScreenSize'

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-50 dark:bg-black">
      {/*<InteractiveBackground/>*/}
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <title>Elyas A. Al-Amri - Leader of Tech</title>
        <meta name="description" content="The official portfolio of Elyas A. Al-Amri"/>

        <meta property="og:title" content="Elyas A. Al-Amri's Portfolio" key="og:title"/>
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_APP_URL}/website.jpg`} key="og:image"/>
        <meta property="og:image:type" content="image/jpeg" key="og:image:type"/>
        <meta property="og:image:width" content="1000" key="og:image:width"/>
        <meta property="og:image:height" content="425" key="og:image:height"/>
        <meta property="og:image:alt" content="Elyas with ambitous text" key="og:image:alt"/>
        <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} key="og:url"/>
        <meta property="og:description" content="The best yet of Elyas A. Al-Amri" key="og:desc"/>
        <meta property="og:type" content="website" key="og:type"/>

        <meta name="twitter:card" content="summary_large_image" key="twitter:card"/>
        <meta property="twitter:domain" content="blog.elyas-amri.ga" key="twitter:domain"/>
        <meta property="twitter:url" content={process.env.NEXT_PUBLIC_APP_URL} key="twitter:url"/>
        <meta name="twitter:title" content="Elyas A. Al-Amri's Official Website" key="twitter:title"/>
        <meta name="twitter:description" content="Elyas A. Al-Amri's Official Blog. Join me every week for new posts." key="twitter:description"/>
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_APP_URL}/website.jpg`} key="twitter:image"/>
      </Head>
      <main className="z-10 flex-1 container mx-auto flex flex-col justify-center mt-4 py-2 lg:py-4">
        <Component {...pageProps} />
      </main>
      <hr className="mt-4 mx-4 border-t-2"/>
      <footer className="w-max dark:bg-white px-2 py-1 rounded mx-auto my-6 flex space-x-4">
        <p className="font-semibold">Made by Elyas A. Al-Amri</p>
        <p className="italic">
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" className="transform translate-y-0.5" width={72} height={16}/>
        </p>
      </footer>
      {process.env.useScreenSize === 'true' && <ScreenSize/>}
    </div>
  )
}
