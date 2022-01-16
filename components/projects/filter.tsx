import { MouseEventHandler, useState } from "react";

const unSelectedStyle =
  "hover:text-gray-800 hover:bg-blue-100  p-2 mx-1 my-2 transition-colors duration-200 flex flex-row items-center text-gray-500 ml-2 text-md font-normal rounded-xl w-full";
const selectedStyle =
  "hover:bg-blue-500  p-2 mx-1 my-2 transition-colors duration-200 flex flex-row items-center text-white ml-2 text-md font-normal bg-blue-500 rounded-xl w-full";

interface Props {
  filterItem: {
    category: Array<string>;
    tags: Array<string>;
  };
}

const Filter = (props: Props) => {
  var itemStyle = {
    category: {
      all: selectedStyle,
      list: new Array<string>(props.filterItem.category.length),
    },
    tags: {
      all: selectedStyle,
      list: new Array<string>(props.filterItem.tags.length),
    },
  };
  itemStyle.category.list.fill(
    unSelectedStyle,
    0,
    itemStyle.category.list.length
  );
  itemStyle.tags.list.fill(unSelectedStyle, 0, itemStyle.tags.list.length);

  const [itemStyleState, setItemStyleState] = useState(itemStyle);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const target = event.target as Element;
    const id = target.id;
    var itemStyleStateTemp = { ...itemStyleState };
    const section = id.split(".")[0] as keyof typeof itemStyleStateTemp;
    const index = id.split(".")[1];

    if (index === "All") {
      itemStyleStateTemp[section].all =
        itemStyleStateTemp[section].all === selectedStyle
          ? unSelectedStyle
          : selectedStyle;
      if (itemStyleStateTemp[section].all === selectedStyle) {
        itemStyleStateTemp[section].list = itemStyleStateTemp[section].list.map(
          (item) => {
            return (item = unSelectedStyle);
          }
        );
      }
    } else {
      itemStyleStateTemp[section].list[Number(index)] =
        itemStyleStateTemp[section].list[Number(index)] === selectedStyle
          ? unSelectedStyle
          : selectedStyle;
      itemStyleStateTemp[section].all = unSelectedStyle;
    }
    setItemStyleState(itemStyleStateTemp);
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
                id={"category.All"}
                className={itemStyleState.category.all}
                onClick={handleClick}
              >
                All
              </button>
              {props.filterItem.category.map((item, i) => (
                <button
                  key={i}
                  id={`category.${i}`}
                  className={itemStyleState.category.list[i]}
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
                id={"tags.All"}
                className={itemStyleState.tags.all}
                onClick={handleClick}
              >
                All
              </button>
              {props.filterItem.tags.map((item, i) => (
                <button
                  key={i}
                  id={`tags.${i}`}
                  className={itemStyleState.tags.list[i]}
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
