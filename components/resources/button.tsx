const Button = (props:{text:string}) => {
  return (
    <div className="py-6">
<button
      type="button"
      className="text-white bg-gradient-to-bl from-sky-500 to-blue-500 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
    >
      {props.text}
    </button>
    </div>
    
  );
};
export default Button;
