import { SideBarList } from "./interface";

const SideBar = () => {
  const sideBarList: SideBarList = [
    {
      sectionTitle: "Funding Opportunities",
      list: [
        {
          text: "Bounty",
          link: "#",
        },
        {
          text: "Ecosystem Grant",
          link: "#",
        },
        {
          text: "Ecosystem VC",
          link: "#",
        },
      ],
    },
    {
      sectionTitle: "Programs",
      list: [
        {
          text: "Algorand Governance",
          link: "#",
        },
      ],
    },
    {
      sectionTitle: "Resources",
      list: [
        {
          text: "Dev Resources",
          link: "#",
        },
      ],
    },
  ];
  return (
    <div className="relative bg-white dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 h-full">
          <nav className="mt-10 px-6">
            {sideBarList.map((section, i) => (
              <div key={i}>
                <p className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                  {section.sectionTitle}
                </p>
                {section.list.map((item, j) => (
                  <a
                    key={j}
                    className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                    href={item.link}
                  >
                    <span className="mx-4 text-md font-normal">
                      {item.text}
                    </span>
                  </a>
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
