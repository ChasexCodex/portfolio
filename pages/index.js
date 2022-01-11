import Head from 'next/head'
import Image from 'next/image'

import * as faIcons from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {projects, contributions, links} from '../data'

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
      <hr className="m-4"/>
      <p className="text-center text-3xl font-bold my-2">Projects</p>
      <div className="mx-4 space-y-2 bg-white">
        {projects.map((p, i) => {
          return (
            <div className="rounded h-40 shadow-md p-2 flex" key={i}>
              <div className="flex-1">
                <p>{p.name}</p>
                <p>{p.from} - {p.to}</p>
              </div>
              <Image src={p.image} className="rounded object-cover self-center" width={150} height={150}/>
            </div>
          )
        })}
      </div>
      <hr className="m-4"/>
      <p className="text-center text-3xl font-bold my-2">Contributions</p>
      <div className="mx-4 space-y-2 bg-white">
        {contributions.map((c, i) => {
          return (
            <a target="_blank" className="block rounded shadow-md p-2" key={i}>
              <p>{c.name}: <span className="font-bold text-blue-400 underline">{c.href}</span></p>
              {/*<Image src={c.image} width={100} height={100}/>*/}
            </a>
          )
        })}
      </div>
      <hr className="m-4"/>
      <p className="text-center text-3xl font-bold my-2">Social Links</p>
      <div className="mx-4 space-y-2 bg-white">
        {links.map((l, i) => {
          return (
            <a href={l.url} target="_blank" className="flex space-x-2 items-center rounded shadow-md p-2" key={i}>
              <span className="w-10 h-10">
                <FontAwesomeIcon icon={faIcons[l.icon]}/>
              </span>
              <p className="font-bold text-blue-400 underline">{l.href}</p>
            </a>
          )
        })}
      </div>
    </>
  )
}
