const Button = (props: { text: string; link: string }) => {
  return (
    <div className="w-full">
      <a href={props.link} target="_blank" rel="noreferrer">
        <button
          type="button"
          className="text-white  w-full  bg-blue-500 font-medium rounded-lg text-xl px-10 py-1 text-center shadow-lg hover:scale-105 transition-all duration-200"
        >
          {props.text}
        </button>
      </a>
    </div>
  );
};
export default Button;
