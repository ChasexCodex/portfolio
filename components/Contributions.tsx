import {contributions} from '../data'
import Image from 'next/image'

export default function Contributions() {
  return (
      <>
        <p className="text-center text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 dark:text-white">
          Contributions
        </p>
        <div className="mx-4 space-y-2 lg:grid grid-cols-4 lg:space-y-0 gap-2">
          {contributions.map((c, i) => {
            return (
                <a href={c.url} target="_blank" rel="noreferrer"
                   className="block bg-white rounded shadow-md px-4 py-2 lg:p-4 dark:bg-gray-600 transform transition hover:scale-[102%] focus:scale-[102%]"
                   key={i}>
                  {/*{c.image && <Image src={c.image} width={50} height={50}/>}*/}
                  <p><span className="dark:text-white">{c.name}:</span> <span
                      className="font-bold text-blue-400 dark:text-blue-200 underline">{c.href}</span></p>
                </a>
            )
          })}
        </div>
      </>
  )
}
