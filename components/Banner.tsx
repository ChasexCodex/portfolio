import Image from 'next/image'
import ShadyImage from './ShadyImage'

export default function Banner() {
  return (
      <>
        <div className="flex flex-col justify-center items-center mx-6 mt-4 space-y-4 md:hidden">
          <div className="bg-gradient-from-tl from-blue-600 to-purple-700 bg-gradient-to-br
         bg-opacity-90 text-lg px-2 py-4 w-full md:text-xl rounded">
            <p className="font-semibold">Technology-driven computer enthusiast with passion for music and coding</p>
          </div>
          <div className="flex w-max justify-center items-center border-2 rounded shadow">
            <Image className="rounded aspect-ratio object-cover" src="/images/profile/normal.jpg" alt="Profile Photo"
                   width="360" height="450"/>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center mt-4 mx-4 space-y-4">
          <div
              className="bg-gradient-from-tl from-blue-600 to-purple-700 bg-gradient-to-br bg-opacity-90 text-lg p-4 w-full md:text-xl rounded shadow flex flex-row">
            <p className="font-semibold text-4xl lg:text-5xl leading-20 p-4 italic">
              Technology-driven computer enthusiast with passion for music and coding
            </p>
            <div className="flex justify-center items-center rounded shadow">
              <ShadyImage image1="/images/profile/normal.jpg"
                          image2="/images/profile/ciphered.jpg"
                          size={{width: 763, height: 900}}
              />
            </div>
          </div>
        </div>
      </>
  )
}
