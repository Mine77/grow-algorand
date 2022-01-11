import Image from "next/image";
import Link from "next/link";

const EventsHero = () => {
  return (
    <div className="flex flex-row items-center w-full py-10">
      <div className="w-full pb-6 space-y-6 pl-24">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="inline">Participate in</span> <br />
          <span className="inline text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-500">
            Community Events
          </span>
        </h1>
        <p className="text-xl text-gray-500 ">
          Get to learn the latest news from the ecosystem and find other great minds just like you
        </p>
        <div className="flex flex-row">
          <a
            href="#"
            className="flex items-center px-6 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md w-auto hover:bg-blue-500"
          >
            Coming Soon
          </a>
        </div>
      </div>
      <div className="w-full mt-10 mb-4 ml-24">
        <Image
          width={450}
          height={450}
          src="/images/settings.png"
          alt="Project Hero Image"
        />
      </div>
    </div>
  );
};

export default EventsHero;
