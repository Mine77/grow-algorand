import Button from "../../components/resources/button";
import ResCard from "../../components/resources/card";
import ResFAQ from "../../components/resources/faq";
import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";

const VC = () => {
  const cards = [
    {
      title: "Borderless Capital",
      description: "This is a description",
      link: "https://www.borderlesscapital.io/",
      image: "logo.png",
    },
    
  ];
  return (
    <ResLayout>
      <ResHeader
        title="Ecosystem VC"
        description="Get funding from those who share the Algorand vision"
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

export default VC;
