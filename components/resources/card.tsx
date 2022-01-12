import Image from "next/image";
const ResCard = (props: {
  title: string;
  description: string;
  link: string;
  image: string;
}) => {
  const imagePath = "/images/" + props.image;
  return (
    <div className="bg-white rounded-lg shadow-md m-4 hover:scale-105 duration-200 transition-all">
      <a href={props.link} target="_blank">
        <div className="flex items-center justify-center p-8">
          <Image
            width={150}
            height={150}
            className="rounded-lg"
            src={imagePath}
            alt="item image"
          />
        </div>

        <div className="px-5 pb-5">
          <h3 className="text-xl font-semibold text-gray-900 ">
            {props.title}
          </h3>
          <p className="text-sm font-">{props.description}</p>
        </div>
      </a>
    </div>
  );
};

export default ResCard;
