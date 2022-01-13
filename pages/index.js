import Head from 'next/head'
import Link from 'next/link'
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
      <p className="font-bold px-4 text-4xl md:text-5xl lg:text-6xl">Elyas A. Al-Amri</p>
      <div className="space-y-2 mx-4 mt-4">
        <hr className="border-t-4 my-2"/>
      </div>
      <div className="flex flex-col justify-center items-center mx-4 mt-4 space-y-4 md:hidden">
        <div className="bg-gradient-from-tl from-blue-600 to-purple-700 bg-gradient-to-br bg-opacity-90 text-lg px-2 py-4 w-full md:text-xl rounded">
          <p className="font-semibold">Technology-driven computer enthusiast with passion for music and coding</p>
        </div>
        <div className="flex w-max justify-center items-center border-2 rounded shadow">
          <Image className="rounded aspect-ratio object-cover" src="/images/profile.jpg" width="360" height="450"/>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center items-center mx-4 mt-4 space-y-4">
        <div className="bg-gradient-from-tl from-blue-600 to-purple-700 bg-gradient-to-br bg-opacity-90 text-lg p-4 w-full md:text-xl rounded shadow flex flex-row">
          <p className="font-semibold text-4xl lg:text-5xl leading-20 p-4 italic">Technology-driven computer enthusiast with passion for music and coding</p>
          <div className="flex justify-center items-center rounded shadow">
            <Image className="rounded ring aspect-ratio object-cover" src="/images/profile.jpg" width="360" height="450"/>
          </div>
        </div>
      </div>
      <hr className="mx-4 mt-4 mb-1"/>
      <p className="text-center text-3xl font-bold mb-4">Projects</p>
      <div className="mx-4 space-y-2 lg:grid grid-cols-2 lg:space-y-0 gap-2">
        {projects.map((p, i) => {
          return (
            <Link href={p.link ?? "/"} key={i}>
              <a className="block rounded bg-white h-40 shadow-md p-4 pb-2 flex">
                <div className="flex-1 flex flex-col">
                  <p className="text-xl lg:text-2xl font-bold from-[#7C7A7AFF] to-[#7C7A7AFF] via-[#adadad] bg-gradient-from-t bg-gradient-to-b  w-max rounded-xl px-2">{p.name}</p>
                  <p className="pl-1 leading-5 mt-0.5">{p.description}</p>
                  <p className="px-1 text-center mt-auto text-sm bg-green-200 border border-gray-400 rounded-lg">{p.from} - {p.to}</p>
                </div>
                <Image src={p.image} className="rounded object-cover self-center" width={150} height={150}/>
              </a>
            </Link>
          )
        })}
      </div>
      <hr className="mx-4 mt-4 mb-1"/>
      <p className="text-center text-3xl font-bold mb-4">Contributions</p>
      <div className="mx-4 space-y-2 lg:grid grid-cols-4 lg:space-y-0 gap-2">
        {contributions.map((c, i) => {
          return (
            <a href={c.url} target="_blank" rel="noreferrer" className="block bg-white rounded shadow-md px-4 py-2 lg:p-4" key={i}>
              {c.image && <Image src={c.image} width={50} height={50}/>}
              <p>{c.name}: <span className="font-bold text-blue-400 underline">{c.href}</span></p>
            </a>
          )
        })}
      </div>
      <hr className="mx-4 mt-4 mb-1"/>
      <p className="text-center text-3xl font-bold mb-4">Social Links</p>
      <div className="mx-4 space-y-2 flex flex-col lg:flex-row lg:space-x-2 lg:h-40 lg:justify-center">
        {links.map((l, i) => {
          return (
            <a href={l.url} target="_blank" rel="noreferrer" className="flex lg:flex-col lg:w-40 space-x-2 items-center rounded bg-white shadow-md p-2" key={i}>
              <span className="h-10 w-10 lg:flex-1 lg:w-24">
                <FontAwesomeIcon icon={faIcons[l.icon]}/>
              </span>
              <p className="font-bold text-blue-400 underline h-6 p-2">{l.href}</p>
            </a>
          )
        })}
      </div>
    </>
  )
}
