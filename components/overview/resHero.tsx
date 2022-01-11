import Link from "next/link";

const ResHero = () => {
  const heroContent = [
    {
      title: "I'm a Developer",
      description: "Start with learn and get to earn",
      link: "#",
    },
    {
      title: "I'm Building on Algorand",
      description: "Get funding and community support",
      link: "#",
    },
    {
      title: "I'm an ALGO Hodler",
      description: "Join governance and more",
      link: "#",
    },
  ];
  return (
    <section className="flex items-center justify-center py-16 min-w-screen">
      <div className="max-w-6xl px-12 mx-auto md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <p className="mb-2 text-base font-medium tracking-tight text-blue-500 uppercase">
              You are not alone
            </p>
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
              Ecosystem Resources
            </h2>
            <p className="my-6 text-lg text-gray-600">
              Find out how you can get support on whatever you wanna do for grow
              Algorand ecosystem
            </p>
            <a
              href="#"
              className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
            >
              Explore
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            {heroContent.map((item, i) => (
              <Link key={i} href={item.link} passHref>
                <a>
                  <div
                    key={i}
                    className="group flex items-center justify-between w-full col-span-1 px-6 pb-6 pt-4 m-2 bg-white hover:bg-blue-500 rounded-lg shadow hover:shadow-2xl duration-200 transition-all"
                  >
                    <div className="flex flex-col">
                      <h3 className="pl-8 mt-3 text-md font-bold leading-5 text-gray-800 truncate sm:text-base lg:text-xl flex items-center">
                        <span className="group-hover:text-white">
                          {item.title}
                        </span>
                      </h3>
                      <div className="relative pl-8">
                        <p className="group-hover:text-white mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-auto text-blue-500 group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ResHero;
