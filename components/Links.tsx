import {links} from '../data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-brands-svg-icons'

export default function Links() {
  return (
      <div>
        <hr className="mx-4 mt-4 mb-1"/>
        <p className="text-center text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 dark:text-white">
          Social Links
        </p>
        <div className="mx-4 space-y-2 lg:space-y-0 flex flex-col lg:flex-row lg:space-x-2 lg:h-40 lg:justify-center">
          {links.map((l, i) => {
            // @ts-ignore
            const icon = faIcons[l.icon]
            return (
                <a href={l.url} target="_blank" rel="noreferrer"
                   className="flex lg:flex-col lg:w-40 space-x-2 items-center rounded bg-white shadow-md p-2 dark:bg-gray-600 transform transition hover:scale-[102%] focus:scale-[102%]"
                   key={i}>
              <span className="h-10 w-10 lg:flex-1 lg:w-24">
                <FontAwesomeIcon icon={icon}/>
              </span>
                  <p className="font-bold text-blue-400 underline h-6 p-2 dark:text-blue-200">{l.href}</p>
                </a>
            )
          })}
        </div>
      </div>
  )
}
