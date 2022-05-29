import Link from 'next/link'

const Title = () => {
  return (
      <div>
        <p className="flex font-bold px-4 text-4xl md:text-5xl lg:text-6xl dark:text-white">
          <span>
            Elyas A. Al-Amri - Leader of Tech
          </span>
          <Link href={process.env.BLOG_URL ?? ''} passHref>
            <a className="ml-auto text-2xl bg-yellow-400 py-3 px-4 rounded ring text-center">
              Blog
            </a>
          </Link>
        </p>
        <div className="mx-4 mt-4">
          <hr className="border-t-4 my-2"/>
        </div>
      </div>
  )
}

export default Title
