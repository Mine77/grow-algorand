import { SideBarList } from "./interface";

const SideBar = () => {
  const sideBarList: SideBarList = [
    {
      sectionTitle: "Funding",
      list: [
        {
          text: "Ecosystem Grant",
          link: "#",
        },
        {
          text: "Ecosystem VC",
          link: "#",
        },
        {
          text: "Bounty",
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
      sectionTitle: "Others",
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
          <nav className="px-6">
            {sideBarList.map((section, i) => (
              <div key={i}>
                <p className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                  {section.sectionTitle}
                </p>
                {section.list.map((item, j) => (
                  <a
                    key={j}
                    href={item.link}
                    className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 "
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
