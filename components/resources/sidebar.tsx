import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  console.log(router)
  const sideBarList = [
    {
      sectionTitle: "For Developers",
      list: [
        {
          text: "Learning Material",
          link: "#",
        },
        {
          text: "Infrastructure",
          link: "#",
        },
        {
          text: "Bounty",
          link: "#",
        },
      ],
    },
    {
      sectionTitle: "For Projects",
      list: [
        {
          text: "Grant",
          link: "#",
        },
        {
          text: "Venture Capital",
          link: "#",
        },
      ],
    },
    {
      sectionTitle: "For Community",
      list: [
        {
          text: "Governance",
          link: "#",
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
                  <a
                    key={j}
                    href={item.link}
                    className="hover:text-gray-800 font-thin text-gray-500  hover:bg-gray-100 flex p-2 my-4 transition-colors duration-200 "
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
