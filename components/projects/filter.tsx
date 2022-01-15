import Link from "next/link";
import { MouseEventHandler } from "react";

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
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const target = event.target as Element;
    target.className =
      target.className === seletedStyle ? unSelectedStyle : seletedStyle;
    if (target.id === "Category.All") {
      console.log(target.id);
    }
  };
  return (
    <div className="relative bg-white ">
      <div className="flex flex-col">
        <div className="w-56 h-full">
          <nav className="px-6">
            <div>
              <p className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-lg font-bold">
                Category
              </p>
              <button
                id={"Category.All"}
                className={seletedStyle}
                onClick={handleClick}
              >
                All
              </button>
              {props.filterItem.category.map((item, j) => (
                <button
                  key={j}
                  id={`Category.${item}`}
                  className={unSelectedStyle}
                  onClick={handleClick}
                >
                  {item}
                </button>
              ))}
            </div>
            <div>
              <p className="text-gray-800 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-lg font-bold">
                Tags
              </p>
              <button
                id={"Tags.All"}
                className={seletedStyle}
                onClick={handleClick}
              >
                All
              </button>
              {props.filterItem.tags.map((item, j) => (
                <button
                  key={j}
                  id={`Tags.${item}`}
                  className={unSelectedStyle}
                  onClick={handleClick}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Filter;
