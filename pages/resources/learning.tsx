import Button from "../../components/resources/button";
import ResCard from "../../components/resources/card";
import ResFAQ from "../../components/resources/faq";
import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";

const Learning = () => {
  const cards = [
    {
      title: "Developer Portal",
      description: "Documentations and tutorials",
      link: "https://developer.algorand.org/",
      image: "logo.png",
    },
    
  ];
  return (
    <ResLayout>
      <ResHeader
        title="Learning Resources"
        description="Learn from the basics to the advanced"
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

export default Learning;
