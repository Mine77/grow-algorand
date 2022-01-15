import Airtable from "airtable";
import ProjectCard from "./card";

interface Card {
  Title: string;
  Description: string;
  Link: string;
  Image: Array<Airtable.Attachment>;
}

export interface Cards extends Array<Card> {}

const ProjectCards = (props: { cards: Cards | undefined }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {props.cards === undefined ? (
        <div className="flex items-center justify-center w-full m-72">
          <p className="text-xl animate-pulse">Loading...</p>
        </div>
      ) : (
        props.cards.map((card, i) => (
          <div key={i} className="flex">
            <ProjectCard
              key={i}
              title={card.Title}
              description={card.Description}
              link={card.Link}
              image={card.Image[0].url}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectCards;
