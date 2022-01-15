import Image from "next/image";
const ProjectCard = (props: {
  title: string;
  description: string;
  link: string;
  image: string;
}) => {
  return (
    <div className="bg-white w-48 rounded-xl shadow-md mx-2 my-4 hover:scale-105 duration-200 transition-all">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="p-3">
          <div className="relative w-full h-48 justify-center">
            <Image
              layout="fill"
              objectFit="contain"
              sizes="100%"
              src={props.image}
              alt="item image"
              priority
            />
          </div>
        </div>

        <div className=" px-3 pb-5">
          <h3 className="text-lg font-semibold text-gray-900 ">
            {props.title}
          </h3>
          <p className="text-sm font-">{props.description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
