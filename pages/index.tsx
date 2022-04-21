import Head from 'next/head'

import {Banner, Contributions, Projects, Links, Title, Footer, SkillSphere, SkillDetails} from '../components'
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
          <Parallax pages={7} ref={ref} className="hide-scroll py-8">
            <ParallaxLayer offset={0} speed={1} factor={0.1}>
              <Title/>
              <Banner/>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1} sticky={{start: 1.5, end: 3.3}} factor={2}>
              <div className="relative w-1/2 h-full">
                <SkillSphere/>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2.5} factor={2}>
              <SkillDetails/>
            </ParallaxLayer>

            <ParallaxLayer offset={5} speed={1}>
              <Projects/>
              <div className="my-8"/>
              <Contributions/>
              <div className="my-8"/>
              <Links/>
            </ParallaxLayer>

            <ParallaxLayer offset={6} speed={1}>
              <Footer/>
            </ParallaxLayer>
          </Parallax>
        </div>
      </>
  )
}
