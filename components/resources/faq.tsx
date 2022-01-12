const ResFAQ = (props: { content: Array<{ title: string; text: string }> }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <ul className="flex items-start gap-8 flex-wrap">
        {props.content.map((item, i) => (
          <li key={i} className="w-2/5">
            <h4 className="text-xl font-medium leading-6 text-blue-600">
              {item.title}
            </h4>
            <p className="mt-2">
              <span className="text-base leading-6 text-gray-800">{item.text}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResFAQ;
