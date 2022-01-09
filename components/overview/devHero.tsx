import Image from "next/image";
import Link from "next/link";
import { HeroLinkList } from "./interface";

const DevHero = () => {
  const linkList: HeroLinkList = [
    {
      title: "Learn",
      text: "Add algosdk and AVM to your techstack",
      link: "#",
    },
    {
      title: "Dev Events",
      text: "Join bootcamps, hackathons, accelerators and more",
      link: "#",
    },
    {
      title: "Bounty",
      text: "Enjoy some coding time and earn bounties",
      link: "#",
    },
    {
      title: "Jobs",
      text: "Get a job from Algorand ecosystem projects",
      link: "#",
    },
  ];
  return (
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
      <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <Image
          src="/images/productivity.png"
          width={400}
          height={400}
          className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
        />
      </div>

      <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
          I'm a Developer
        </h2>
        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
          Then you need some opportunities from learning to earn
        </p>
        <ul className="p-0 m-0 leading-6 border-0">
          {linkList.map((item) => (
            <li className="box-border relative py-1 pl-0 text-left border-solid">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full">
                <span className="text-sm font-bold">✓</span>
              </span>
              <Link href={item.link}>
                <a className="hover:border-b-2 border-blue-400 ">
                  <span className="text-lg font-semibold text-gray-700">{item.title}</span>
                  <span> - </span>
                  <span className="text-md text-gray-600">{item.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DevHero;
