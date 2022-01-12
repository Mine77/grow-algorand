import Button from "../../components/resources/button";
import ResFAQ from "../../components/resources/faq";
import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";

const Governance = () => {
  const faqContent = [
    {
      title: "How much rewards?",
      text: "The APY varies depending on how many ALGOs are committed in a single governance period. According to the history records it's around 16% APY.",
    },
    {
      title: "How do I join?",
      text: "Click in the button above and see the latest governance period.",
    },
    {
      title: 'What do you mean by "non-staking"?',
      text: "By participating in the governance, you only need to make a commitment with the ALGO balance in your wallet, so it's not locked. You can transfer your token out any time. However if your wallet balance turns lower than the commitment amount anytime during the governance period, you lose your rewards.",
    },
    
    {
      title: "When can I join?",
      text: "The Algorand governance runs in periods every 3 months. You can join and commit and your ALGOs at the start of a period. Once you commit some ALGOs you are eligible for voting and claiming rewards at the end of the period.",
    },
    {
      title: "Who manage the governance?",
      text: "The Algorand Foundation monitors the system and propose voting topics for each governance period. But is it up to every ALGO holder to make the decision.",
    },
  ];
  return (
    <ResLayout>
      <ResHeader
        title="Algorand Governance"
        description="Change the future of Algorand in a non-staking way, and earn rewards"
      />
      <Button
        text="See the Latest Governance Period"
        link="https://governance.algorand.foundation/"
      />
      <ResFAQ content={faqContent} />
    </ResLayout>
  );
};

export default Governance;
