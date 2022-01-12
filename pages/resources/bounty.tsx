import Button from "../../components/resources/button";
import ResFAQ from "../../components/resources/faq";
import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";

const Bounty = () => {
  const faqContent = [
    {
      title: "How much bounty rewards can I get?",
      text: "Depends on the bounty tasks, it varies from 50ALGOs to 5,000ALGOs, or more.",
    },
    {
      title: "What tokens do I get?",
      text: "Mostly ALGO, but if your residence country requires otherwise you will get USDCa. ",
    },
    {
      title: "How does it work?",
      text: "Click in the button above and find all the available bounties from Algorand. Then login with your GitHub account and claim. Work on it and submit the work.",
    },
    {
      title: "How do I reach out for questions?",
      text: "You can leave a message in the bounty's GitHub issue page.",
    },
  ];
  return (
    <ResLayout>
      <ResHeader
        title="ALGO Bounties on Gitcoin"
        description="Earn some ALGOs with your technical talent"
      />
      <Button
        text="See All Bounties on Gitcoin"
        link="https://gitcoin.co/explorer?network=mainnet&idx_status=open&applicants=ALL&keywords=algodev,algorand&order_by=null&org=algorand"
      />
      <ResFAQ content={faqContent} />
    </ResLayout>
  );
};

export default Bounty;
