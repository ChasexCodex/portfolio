import Head from 'next/head'
import Image from 'next/image'

import type {AppProps} from 'next/app'
import '../styles/globals.css'

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
      <hr className="mt-4 mx-4 border-t-2"/>
      <footer className="w-max dark:bg-white px-2 py-1 rounded mx-auto my-6 flex space-x-4">
        <p className="font-semibold">Made by Elyas A. Al-Amri</p>
        <a className="italic" href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
           target="_blank"
           rel="noopener noreferrer">
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" className="transform translate-y-0.5" width={72} height={16}/>
        </a>
      </footer>
    </div>
  )
}
