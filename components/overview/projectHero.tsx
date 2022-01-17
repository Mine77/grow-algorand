import Image from "next/image";
import Link from "next/link";

const ProjectHero = () => {
  return (
    <div className="flex flex-row items-center w-full py-10">
      <div className="w-full px-4 mt-10 mb-4 text-center">
        <Image
          width={450}
          height={450}
          src="/images/settings.png"
          alt="Project Hero Image"
        />
      </div>
      <div className="w-full pb-6 space-y-6 ml-auto">
        <h1 className="text-6xl font-extrabold text-gray-900">
          <span className="inline">Explore</span> <br />
          <span className="inline text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-600">
            Ecosystem Projects
          </span>
        </h1>
        <p className="text-xl text-gray-500 ">
          Web3, DeFi, GameFi, SocialFi and more! Start enjoying Algorand powered
          new financial system.
        </p>
        <div className="flex flex-row">
          <Link href="/projects" passHref>
            <a className="flex items-center px-6 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md w-auto hover:bg-blue-500">
              Coming Soon
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
