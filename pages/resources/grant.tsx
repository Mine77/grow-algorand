import Button from "../../components/resources/button";
import ResFAQ from "../../components/resources/faq";
import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";

const Grant = () => {
  const faqContent = [
    {
      title: "Who can apply for a grant?",
      text: "There are 4 categories of acceptable grant applications: Reaserch, Application, Infrastructure and Education",
    },
    {
      title: "What's the grant application reviewing process?",
      text: "Submit your proposal with the link above -> Someone from the grant committee will contact you for questions->if accepted, sign the contract and start to work on the milestons",
    },
    {
      title: "What are the evaluation criteria?",
      text: "In most Australian states the government requires that all new homes and apartments (along with certain types of building extensions) built since 2010 be energy rated and achieve a minimum of 6 Stars.",
    },
    {
      title: "How much grant can I get?",
      text: "Up to $300k for a single grant project.",
    },
  ];
  return (
    <ResLayout>
      <ResHeader
        title="Algorand Foundation Grants"
        description="250M ALGO grant pool for every ecosystem builder"
      />
      <Button text="Submit Application" />
      <ResFAQ content={faqContent} />
    </ResLayout>
  );
};

export default Grant;
