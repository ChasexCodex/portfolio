import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elyas A. Al-Amri&apos;s Portfolio</title>
        <meta name="description" content="The official website of Elyas A. Al-Amri"/>
      </Head>
      <p className="text-center text-3xl font-bold">Elyas A. Al-Amri</p>
      <div className="flex flex-col justify-center items-center mx-4 mt-4 space-y-4">
        <div className="bg-blue-400 text-lg px-2 py-4 rounded shadow">
          <p className="font-semibold">Technology-driven computer enthusiast with passion for music and coding</p>
        </div>
        <div className="flex w-full justify-center items-center border-2 rounded shadow">
          <Image className="rounded aspect-ratio object-cover" src="/images/profile.jpg" width="360" height="450"/>
        </div>
      </div>
      <hr className="my-4 mx-2"/>
    </>
  )
}
