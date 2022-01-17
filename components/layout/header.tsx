import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderList } from "./interface";

const Header = () => {
  const HeaderItemStyle = {
    selectedStyle:
      "inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-sky-600 lg:mx-3 md:text-center",
    unSelectedStyle:
      "inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-sky-600 lg:mx-3 md:text-center",
  };

  const router = useRouter();

  const list: HeaderList = [
    {
      text: "Overview",
      link: "/",
    },
    {
      text: "Projects",
      link: "/projects",
    },
    {
      text: "Resources",
      link: "/resources/learning",
    },
  ];

  return (
    <nav className="relative z-50 h-24 select-none">
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <Link href="/" passHref>
            <a className="inline-block py-4 md:py-0">
              <span className="p-1 text-xl font-black leading-none text-gray-900">
                <span className="">Grow Algorand</span>
              </span>
            </a>
          </Link>
        </div>
        <div className="flex top-0 left-0 items-center justify-end w-3/4 h-full p-4 bg-gray-900 text-base bg-transparent">
          {list.map((item, i) => (
            <Link key={i} href={item.link} passHref>
              <a className={HeaderItemStyle.unSelectedStyle}>{item.text}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
