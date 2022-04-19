import Head from 'next/head'

import {Banner, Contributions, Projects, Links, Title, Footer} from '../components'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {useRef} from 'react'

export default function Home() {
  const ref = useRef(null)
  return (
      <>
        <Head>
          <title>Elyas A. Al-Amri - Leader of Tech</title>
          <meta name="description" content="The official website of Elyas A. Al-Amri"/>
        </Head>
        <div className="relative flex-1">
          <Parallax pages={5} ref={ref} className="hide-scroll">
            <ParallaxLayer offset={0} speed={1}>
              <Title/>
              <Banner/>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={1}>
              <Projects/>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0.5}>
              <Contributions/>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0.5}>
              <Links/>
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={1} factor={1}>
              <Footer/>
            </ParallaxLayer>
          </Parallax>
        </div>
      </>
  )
}
