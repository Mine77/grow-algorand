// export interface CardsPageContent {
//   title: string;
//   description: string;
//   category: string;
// }

// export interface FaqPageContent {
//   title: string;
//   description: string;
//   button: {
//     text: string;
//     link: string;
//   };
//   faq: Array<{
//     title: string;
//     text: string;
//   }>;
// }

// interface ContentType {
//   learning: CardsPageContent;
//   vc: CardsPageContent;
//   bounty: FaqPageContent;
//   governance: FaqPageContent;
// }

interface Content {
  [key: string]: {
    title: string;
    description: string;
    cardCategory?: string;
    button?: {
      text: string;
      link: string;
    };
    faq?: Array<{
      title: string;
      text: string;
    }>;
  };
}

export const PageContent: Content = {
  learning: {
    title: "Learning Resources",
    description: "Learn from the basics to the advanced",
    cardCategory: "Education",
  },
  vc: {
    title: "Venture Capital",
    description: "Accelerate your projects with some funding",
    cardCategory: "VentureCapital",
  },

  bounty: {
    title: "ALGO Bounties on Gitcoin",
    description: "Earn some ALGOs with your technical talent",
    button: {
      text: "See All Bounties",
      link: "#",
    },
    faq: [
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
    ],
  },
  governance: {
    title: "Algorand Governance",
    description:
      "Change the future of Algorand in a non-staking way, and earn rewards",
    button: {
      text: "See the Latest Governance Period",
      link: "https://governance.algorand.foundation/",
    },
    faq: [
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
    ],
  },
  grant: {
    title: "Algorand Foundation Grants",
    description: "250M ALGO grant pool for every ecosystem builder",
    button: {
      text: "Submit Application",
      link: "https://algorandfoundation.submittable.com/submit/58a1352f-414b-4ed3-8ef1-193f1b9db97e/algorand-foundation-request-for-funding",
    },
    faq: [
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
    ],
  },
};
