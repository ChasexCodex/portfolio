import {projects} from '../data'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  return (
      <>
        <p className="text-center text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 dark:text-white">
          Projects
        </p>
        <div className="mx-4 space-y-2 lg:grid grid-cols-2 lg:space-y-0 gap-2">
          {projects.map((p, i) => {
            return (
                <Link href={p.url ?? '/'} key={i}>
                  <a className="block rounded bg-white h-40 shadow-md p-4 pb-2 flex dark:bg-gray-600 transform transition hover:scale-[102%] focus:scale-[102%]">
                    <div className="flex-1 flex flex-col">
                      <p className="text-xl lg:text-2xl font-bold from-[#7C7A7AFF] to-[#7C7A7AFF] via-[#adadad] lg:via-[#7C7A7AFF] bg-gradient-from-t bg-gradient-to-b  w-max rounded-xl px-2">{p.name}</p>
                      <p className="pl-1 leading-5 mt-0.5 dark:text-white">{p.description}</p>
                      <p className="px-1 -mb-1 mt-auto text-xs lg:text-sm lg:mb-0 dark:text-white">{p.from} - {p.to}</p>
                    </div>
                    <Image src={p.image} className="rounded object-cover self-center" width={150} height={150} alt="Project Image"/>
                  </a>
                </Link>
            )
          })}
        </div>
      </>
  )
}
