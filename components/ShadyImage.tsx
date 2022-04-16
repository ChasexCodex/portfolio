import Image from 'next/image'
import {PropsWithChildren} from 'react'

type Props = {
  image1: string
  image2: string
}

const ShadyImage = ({image1, image2, ...rest}: PropsWithChildren<Props>) => {
  return (
      <div className="flex-1 relative min-w-[350px] lg:min-w-[500px] h-[400px] lg:h-[600px]">
        <div className="absolute inset-0">
          <Image src={image1} alt="Image 1" layout="fill"
                 className="object-cover transition hover:opacity-0 duration-500 rounded-md"/>
        </div>
        <div className="absolute inset-0">
          <Image src={image2} alt="Image2" layout="fill"
                 className="object-cover transition hover:opacity-100 duration-500 opacity-0 rounded-md"/>
        </div>
        <div className="absolute top-2 right-2 bg-orange-400 rounded-xl px-1">
          Click to switch
        </div>
      </div>
  )
}

export default ShadyImage
