const ScreenSize = () => {
  return (
      <p className="absolute top-2 left-2 bg-white px-2 rounded-lg text-black">
        <span className="block sm:hidden">{'<'}sm</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block">xl</span>
      </p>
  )
}

export default ScreenSize
