import Image from 'next/image'

type Props = {
  image1: string
  image2: string
}

const ShadyImage = ({image1, image2}: Props) => {
  return (
      <div className="flex-1 relative
      min-w-[350px] max-w-[350px] h-[400px]
      lg:min-w-[500px] lg:max-w-[500px] lg:h-[600px]
      ml-auto">
        <div className="absolute inset-0">
          <Image src={image2} alt="Image2" layout="fill"
                 className="object-cover rounded-md"/>
        </div>
        <div className="absolute inset-0">
          <Image src={image1} alt="Image 1" layout="fill"
                 className="object-cover rounded-md animate-fading hover:animate-flashing"/>
        </div>
      </div>
  )
}

export default ShadyImage
