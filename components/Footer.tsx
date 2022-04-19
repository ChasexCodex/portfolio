import Image from 'next/image'

const Footer = () => {
  return (
      <>
        <footer className="w-max dark:bg-white px-40 pt-40 pb-4 rounded mx-auto my-6 flex flex-col space-x-4">
          <p className="font-semibold text-4xl">Made by Elyas A. Al-Amri</p>
          <a className="italic block mt-28 self-center"
             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
             target="_blank"
             rel="noopener noreferrer">
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" className="transform translate-y-0.5" width={72} height={16}/>
          </a>
        </footer>
      </>
  )
}

export default Footer
