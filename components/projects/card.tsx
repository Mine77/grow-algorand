import Airtable from "airtable";
import Image from "next/image";

export interface Card {
  title: string;
  description: string;
  link: string;
  image: string;
  category: string;
  tags: Array<string>;
}

const ProjectCard = (props: Card) => {
  return (
    <div className="bg-white w-48 rounded-xl shadow-md mx-6 my-4 hover:scale-105 duration-200 transition-all">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="p-3">
          <div className="relative w-full h-48 justify-center">
            <Image
              layout="fill"
              objectFit="contain"
              src={props.image}
              alt="item image"
            />
          </div>
        </div>

        <div className="mx-3">
          <div>
            <p className="subpixel-antialiased font-medium text-blue-500 -my-1">
              {props.category}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 ">{props.title}</h3>
          </div>
          <div className="flex flex-wrap justify-start items-start my-1 -ml-1">
            {props.tags.map((tag) => (
              <p className="px-2 mx-1 bg-blue-500 text-white rounded-full text-xs">
                {tag}
              </p>
            ))}
          </div>
          <div>
            <p className="text-sm mt-4 mb-3">{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
