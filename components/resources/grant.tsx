const Grant = () => {
  const content = [
    {
      title:"Who can apply for a grant?",
      text: "There are 4 categories of acceptable grant applications: Reaserch, Application, Infrastructure and Education"
    },
    {
      title:"What's the grant application reviewing process?",
      text: "Submit your proposal with the link above -> Someone from the grant committee will contact you for questions->if accepted, sign the contract and start to work on the milestons"
    },
    {
      title:"What are the evaluation criteria?",
      text: "In most Australian states the government requires that all new homes and apartments (along with certain types of building extensions) built since 2010 be energy rated and achieve a minimum of 6 Stars."
    },
    {
      title:"How much grant can I get?",
      text: "Up to $300k for a single grant project."
    },
  ]
  return (
    <div>
      <div className=" pt-6 pb-4">
        <h1 className="text-6xl font-extrabold pt-3">
          Algorand Foundation Grants
        </h1>
        <p className="text-xl text-gray-500 pt-3">
          250M ALGO grant pool for every ecosystem builder
        </p>
        <div className="flex flex-row py-6">
          <button
            type="button"
            className="text-white bg-gradient-to-bl from-sky-500 to-blue-500 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit Application
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <ul className="flex items-start gap-8 flex-wrap">
          {content.map((item,i)=>(
            <li key={i} className="w-2/5">
            <h4 className="text-xl font-medium leading-6 text-gray-900">
              {item.title}
            </h4>
            <p className="mt-2">
              <p className="text-base leading-6 text-gray-500">
                {item.text}
              </p>
            </p>
          </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default Grant;
