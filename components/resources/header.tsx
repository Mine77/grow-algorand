const ResHeader = (props:{title:string,description:string}) => {
    return (
        <div className="pt-6 pb-4">
        <h1 className="text-6xl font-extrabold pt-3">
          {props.title}
        </h1>
        <p className="text-xl text-gray-500 pt-3">
          {props.description}
        </p>
      </div>
    );
  };
  export default ResHeader;
  