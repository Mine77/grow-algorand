const HomeHero = () => {
  return (
    <div className="container  px-4 py-32 mx-auto  max-w-none text-center">
      <h1 className="text-7xl font-extrabold tracking-tight  text-gray-900 text-center leading-none">
        <span className="inline">Grow Algorand</span>{" "}
      </h1>
      <h2 className=" font-extrabold leading-none tracking-tight  text-gray-900 text-center  text-5xl">
        <span className="relative mt-2 py-1 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-500 inline-block">
          Ecosystem Hub
        </span>
      </h2>
      <div className="mx-auto text-gray-500 mt-12 max-w-lg text-center text-lg">
        Find out the latest ecosystem programs, projects and activities. Learn,
        join, build, earn and so much more!
      </div>
      <div className="flex flex-row items-center justify-center w-full mx-auto mt-12 text-center">
        <div className="w-96">
          <input
            type="text"
            name="email"
            placeholder="Email Address (coming soon)"
            className="w-full h-12 px-6 py-2 font-medium rounded-full -mr-32 text-gray-800 border-2 border-gray-300 focus: outline-blue-500"
          />
        </div>
        <div>
          <button
            type="button"
            className="items-center w-32 h-12 rounded-full text-base font-bold text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent hover:bg-blue-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
