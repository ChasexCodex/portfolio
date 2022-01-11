import Head from 'next/head'
import Image from 'next/image'
import '../styles/globals.css'

export default function MyApp({Component, pageProps}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="flex-1 container mx-auto flex flex-col justify-center mt-4">
        <Component {...pageProps} />
      </main>
      <hr className="mt-4"/>
      <footer className="w-max mx-auto my-6 flex space-x-4">
        <p className="font-semibold">Made by Elyas A. Al-Amri</p>
        <a className="italic" href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
           target="_blank"
           rel="noopener noreferrer">
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
        </a>
      </footer>
    </div>
  )
}
