import Head from 'next/head'

import {Banner, Contributions, Projects, Links, Title} from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elyas A. Al-Amri - Leader of Tech</title>
      </Head>

      <Title/>
      <Banner/>
      <Projects/>
      <Contributions/>
      <Links/>
    </>
  )
}
