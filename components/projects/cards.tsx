import Airtable from "airtable";
import ProjectCard, { Card } from "./card";

export interface Cards extends Array<Card> {}

const ProjectCards = (props: { cards: Cards | undefined }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {props.cards === undefined ? (
        <div className="flex items-center justify-center w-full">
          <p className="text-xl animate-pulse text-center">Loading...</p>
        </div>
      ) : (
        props.cards.map((card, i) => (
          <div key={i} className="flex">
            <ProjectCard
              key={i}
              title={card.title}
              description={card.description}
              link={card.link}
              image={card.image}
              category={card.category}
              tags={card.tags}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectCards;
