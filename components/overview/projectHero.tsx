import Image from "next/image";
import Link from "next/link";
import { HeroContent } from "./interface";

const ProjectHero = () => {
  const content: HeroContent = {
    title: "We're Building on Algorand",
    description: "Supports are right around the corner",
    list: [
      {
        title: "Grant",
        text: "Apply for an up to $300K Algorand Foundation Grant",
        link: "#",
      },
      {
        title: "VC",
        text: "Meet some of the Algorand ecosystem funds",
        link: "#",
      },
      {
        title: "Hiring",
        text: "Find Algorand devs to join your project",
        link: "#",
      },
    ],
  };
  return (
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
      <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-26">
        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
          {content.title}
        </h2>
        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
          {content.description}
        </p>
        <ul className="p-0 m-0 leading-6 border-0">
          {content.list.map((item,i) => (
            <li key={i} className="box-border relative py-1 pl-0 text-left border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>
              <Link href={item.link}>
                <a className="hover:border-b-2 border-blue-400 ">
                  <span className="text-lg font-semibold text-gray-700">
                    {item.title}
                  </span>
                  <span> - </span>
                  <span className="text-md text-gray-600">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="box-border relative max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <Image
          width={400}
          height={400}
          src="/images/settings.png"
          className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
          alt="Project Hero Image"
        />
      </div>
    </div>
  );
};

export default ProjectHero;
