import Head from 'next/head'

import {Banner, Contributions, Projects, Links, Title} from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elyas A. Al-Amri - Leader of Tech</title>
        <meta name="description" content="The official website of Elyas A. Al-Amri"/>
      </Head>

      <Title/>
      <Banner/>
      <Projects/>
      <Contributions/>
      <Links/>
    </>
  )
}
