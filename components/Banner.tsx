import ShadyImage from './ShadyImage'
import ReactRotatingText from 'react-rotating-text'
import {quotes} from '../data'

export default function Banner() {
  const image = <ShadyImage image1="/images/profile/normal.jpg"
                            image2="/images/profile/ciphered.jpg"/>
  const text = <ReactRotatingText items={quotes}
                                  typingInterval={25}
                                  deletingInterval={10}
                                  emptyPause={50}
                                  pause={2000}/>

  return (
      <>
        <div className="flex flex-col justify-center items-center mx-6 mt-4 space-y-4 md:hidden">
          <div className="bg-gradient-from-tl from-blue-600 to-purple-700 bg-gradient-to-br
          bg-opacity-90 text-lg px-2 py-4 w-full md:text-xl rounded">
            <p className="font-semibold h-16">
              {text}
            </p>
          </div>
          <div className="flex w-max justify-center items-center border-2 rounded shadow">
            {image}
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center mt-4 mx-4 space-y-4">
          <div className="bg-gradient-from-tl from-blue-600 to-purple-700 bg-gradient-to-br
          bg-opacity-90 text-lg p-4 w-full md:text-xl rounded shadow flex flex-row">
            <p className="animate-wave1 font-semibold text-4xl lg:text-5xl leading-20 p-4 italic">
              {text}
            </p>
            {image}
          </div>
        </div>
      </>
  )
}
