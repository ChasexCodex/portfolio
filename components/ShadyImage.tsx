import Image from 'next/image'
import {PropsWithChildren} from 'react'

type ImageSize = {
  src: string
}

type Props = {
  image1: string
  image2: string
  size: {
    width: number
    height: number
  }
}

const ShadyImage = ({image1, image2, size, ...rest}: PropsWithChildren<Props>) => {
  return (
      <div style={{...size}} className="relative">
        <div className="absolute top-0 left-0 ">
          <Image src={image1} {...size} alt="Image 1"
                 className="transition hover:opacity-0 duration-500 rounded-md"/>
        </div>
        <div className="absolute top-0 left-0 ">
          <Image src={image2} {...size} alt="Image2"
                 className="transition hover:opacity-100 duration-500 opacity-0 rounded-md"/>
        </div>
      </div>
  )
}

export default ShadyImage
