import Airtable from "airtable";
import ProjectCard, { Card } from "./card";

export interface Cards extends Array<Card> {}

export interface FilterState {
  category: string[];
  tags: string[];
}

const ProjectCards = (props: {
  cards: Cards | undefined;
  filterState: FilterState | undefined;
}) => {
  return (
    <div className="flex flex-wrap w-full items-begin justify-begin">
      {props.cards === undefined ? (
        <div className="flex items-center justify-center w-full">
          <p className="text-xl animate-pulse text-center">Loading...</p>
        </div>
      ) : (
        props.cards.map((card, i) => (
          <div key={i} className="flex">
            {props.filterState?.category.includes(card.category) &&
            props.filterState?.tags.some((v) => card.tags.includes(v)) ? (
              <ProjectCard
                key={i}
                title={card.title}
                description={card.description}
                link={card.link}
                image={card.image}
                category={card.category}
                tags={card.tags}
              />
            ) : null}
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectCards;
