const Button = (props: { text: string; link: string }) => {
  return (
    <div className="py-3">
      <a href={props.link} target="_blank" rel="noreferrer">
        <button
          type="button"
          className="text-white bg-gradient-to-bl from-sky-500 to-blue-500 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 shadow-lg hover:scale-105 transition-all duration-200"
        >
          {props.text}
        </button>
      </a>
    </div>
  );
};
export default Button;
