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
    </div>
  );
};

export default HomeHero;
