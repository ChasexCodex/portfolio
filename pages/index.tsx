import Head from 'next/head'

import {Banner, Contributions, Projects, Links} from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elyas A. Al-Amri - Leader of Tech</title>
        <meta name="description" content="The official website of Elyas A. Al-Amri"/>
      </Head>
      <p className="font-bold px-4 text-4xl md:text-5xl lg:text-6xl dark:text-white">
        Elyas A. Al-Amri - Leader of Tech
      </p>
      <div className="space-y-2 mx-4 mt-4">
        <hr className="border-t-4 my-2"/>
      </div>

      <Banner/>

      <hr className="mx-4 mt-4 mb-1"/>
      <p className="text-center text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 dark:text-white">
        Projects
      </p>
      <Projects/>

      <hr className="mx-4 mt-4 mb-1"/>
      <p className="text-center text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 dark:text-white">
        Contributions
      </p>
      <Contributions/>

      <hr className="mx-4 mt-4 mb-1"/>
      <p className="text-center text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 dark:text-white">
        Social Links
      </p>
      <Links/>
    </>
  )
}
