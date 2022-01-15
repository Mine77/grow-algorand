import Link from "next/link";
import {
  AnchorHTMLAttributes,
  createRef,
  DetailedHTMLProps,
  MouseEventHandler,
  useRef,
  useState,
} from "react";

interface FilterState {
  category: {
    all: boolean;
    application: boolean;
    devTools: boolean;
  };
  Tags: {
    all: boolean;
    application: boolean;
    devTools: boolean;
  };
}

const unSelectedStyle =
  "hover:text-gray-800 hover:bg-blue-100  p-2 mx-1 my-2 transition-colors duration-200 flex flex-row items-center text-gray-500 ml-2 text-md font-normal rounded-xl w-full";
const seletedStyle =
  "hover:bg-blue-500  p-2 mx-1 my-2 transition-colors duration-200 flex flex-row items-center text-white ml-2 text-md font-normal bg-blue-500 rounded-xl w-full";

interface Props {
  filterItem: {
    category: Array<string>;
    tags: Array<string>;
  };
}

const Filter = (props: Props) => {
  const ref = useRef(null);
  const sideBarList = [
    {
      sectionTitle: "Category",
      list: props.filterItem.category,
    },
    {
      sectionTitle: "Tags",
      list: props.filterItem.tags,
    },
  ];
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const target = event.target as Element;
    target.className =
      target.className === seletedStyle ? unSelectedStyle : seletedStyle;
    if (target.id === "Category.All") {
      (ref.current as unknown as Element).className = unSelectedStyle;
      console.log(target.id);
    }
  };
  return (
    <div className="relative bg-white ">
      <div className="flex flex-col">
        <div className="w-56 h-full">
          <nav className="px-6">
            {sideBarList.map((section, i) => (
              <div key={i}>
                <p className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-lg font-bold">
                  {section.sectionTitle}
                </p>
                <button
                  id={`${section.sectionTitle}.All`}
                  className={seletedStyle}
                  onClick={handleClick}
                >
                  All
                </button>
                {section.list.map((item, j) => (
                  <button
                    key={j}
                    ref={ref}
                    id={`${section.sectionTitle}.${item}`}
                    className={unSelectedStyle}
                    onClick={handleClick}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Filter;
