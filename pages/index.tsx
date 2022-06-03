import Head from 'next/head'

import {Banner, Contributions, Projects, Links, Title} from '../components'

export default function Home() {
  return (
    <>
      <Head>
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
      </Head>

      <Title/>
      <Banner/>
      <Projects/>
      <Contributions/>
      <Links/>
    </>
  )
}
