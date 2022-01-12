import Button from "../../components/resources/button";
import ResCard from "../../components/resources/card";
import ResFAQ from "../../components/resources/faq";
import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";

const DevTools = () => {
  const cards = [
    {
      title: "AlgoExplorer",
      description: "Algorand blockchain explorer",
      link: "https://algoexplorer.io/",
      image: "logo.png",
    },
    
  ];
  return (
    <ResLayout>
      <ResHeader
        title="Infrastructure and Toolings"
        description="Don't build the wheels"
      />
      <div className="flex flex-wrap gap-8">
        {cards.map((card, i) => (
          <ResCard
          key={i}
            title={card.title}
            description={card.description}
            link={card.link}
            image={card.image}
          />
        ))}
      </div>
    </ResLayout>
  );
};

export default DevTools;
