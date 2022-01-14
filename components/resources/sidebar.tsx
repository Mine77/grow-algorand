import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const intro = {
    title: "Introduction",
    link: "/resources/intro",
  };
  const sideBarList = [
    {
      sectionTitle: "For Developers",
      list: [
        {
          text: "Learning",
          link: "/resources/learning",
        },
        {
          text: "Dev Tools",
          link: "/resources/dev-tools",
        },
        {
          text: "Bounty",
          link: "/resources/bounty",
        },
      ],
    },
    {
      sectionTitle: "For Projects",
      list: [
        {
          text: "Grant",
          link: "/resources/grant",
        },
        {
          text: "Venture Capital",
          link: "/resources/vc",
        },
      ],
    },
    {
      sectionTitle: "For Community",
      list: [
        {
          text: "Governance",
          link: "/resources/governance",
        },
      ],
    },
  ];
  return (
    <div className="relative bg-white ">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 h-full">
          <nav className="px-6">
            {sideBarList.map((section, i) => (
              <div key={i}>
                <p className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-lg font-bold">
                  {section.sectionTitle}
                </p>
                {section.list.map((item, j) => (
                  <Link key={j} href={item.link} passHref>
                    <a className="hover:text-gray-800 hover:bg-gray-100 font-thin text-gray-500 flex p-2 my-4 transition-colors duration-200 ">
                      <span className="mx-4 text-md font-normal">
                        {item.text}
                      </span>
                    </a>
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
