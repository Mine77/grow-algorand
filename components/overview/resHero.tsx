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
    <section className="flex items-center justify-center min-w-screen">
      <div className="max-w-6xl px-12 mx-auto">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start justify-center w-1/2 h-full pr-8 mb-10">
            <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
              <span className="inline">Ecosystem</span> <br />
              <span className="inline text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-500">
                Resources
              </span>
            </h1>
            <p className="my-6 text-lg text-gray-600">
              Find out how you can get support on whatever you wanna do for grow
              Algorand ecosystem
            </p>
            <div className="flex flex-row">
              <Link href="/resources/grant" passHref>
                <a className="flex items-center px-10 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md w-auto hover:bg-blue-500">
                  Explore
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            {heroContent.map((item, i) => (
              <Link key={i} href={item.link} passHref>
                <a>
                  <div
                    key={i}
                    className="group flex items-center justify-between w-full col-span-1 px-6 pb-6 pt-4 m-4 bg-white hover:bg-blue-500 rounded-2xl shadow hover:scale-105 hover:shadow-2xl duration-200 transition-all"
                  >
                    <div className="flex flex-col">
                      <h3 className="pl-8 mt-3 text-xl font-bold leading-5 text-gray-800 truncate flex items-center">
                        <span className="group-hover:text-white">
                          {item.title}
                        </span>
                      </h3>
                      <div className="relative pl-8">
                        <p className="group-hover:text-white mt-2 text-xl text-gray-600 sm:text-base ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-auto mr-8 text-blue-500 group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16"
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
