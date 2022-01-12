import Button from "../../components/resources/button";
import ResFAQ from "../../components/resources/faq";
import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";

const Grant = () => {
  const faqContent = [
    {
      title: "How much grant can I get?",
      text: "Up to $300k for a single grant project.",
    },
    {
      title: "Who can apply for a grant?",
      text: "There are 4 categories of acceptable grant applications: Reaserch, Application, Infrastructure and Education.",
    },
    {
      title: "What's the grant application reviewing process?",
      text: "Submit your proposal with the link above -> Someone from the grant committee will contact you for questions->if accepted, sign the contract and start to work on the milestons.",
    },
    {
      title: "What are the evaluation criterias?",
      text: "Market and community adoption, technical feasibility and anything other benefits to the Algorand ecosystem that can justify the amount of grant you are asking for.",
    },
    
  ];
  return (
    <ResLayout>
      <ResHeader
        title="Algorand Foundation Grants"
        description="250M ALGO grant pool for every ecosystem builder"
      />
      <Button text="Submit Application" link="https://algorandfoundation.submittable.com/submit/58a1352f-414b-4ed3-8ef1-193f1b9db97e/algorand-foundation-request-for-funding" />
      <ResFAQ content={faqContent} />
    </ResLayout>
  );
};

export default Grant;
