const HomeHero = () => {
  return (
    <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
      <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
        <span className="inline md:block">Grow Algorand</span>{" "}
      </h1>
      <h2 className="text-3xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-4xl lg:text-5xl">
        <span className="relative mt-2 py-1 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-500 md:inline-block">
          Ecosystem Hub
        </span>
      </h2>
      <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
        Find out the latest ecosystem programs, projects and activities. Learn,
        join, build, earn and so much more!
      </div>
      <div className="flex flex-col items-center mt-12 text-center">
        <span className="relative inline-flex w-full md:w-auto">
          <a
            href="#_"
            type="button"
            className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-blue-600 border border-transparent rounded-full md:w-auto hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Start Now
          </a>
        </span>
        <a href="#" className="mt-3 text-sm text-blue-500">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HomeHero;
