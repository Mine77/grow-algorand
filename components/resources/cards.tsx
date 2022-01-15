import useSWR from "swr";
import Airtable from "airtable";
import ResCard from "./card";

interface Card {
  Title: string;
  Description: string;
  Link: string;
  Image: Array<Airtable.Attachment>;
}

export interface Cards extends Array<Card> {}

const ResCards = (props: { tableName: string; cards: Cards | undefined }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {props.cards === undefined
        ? null
        : props.cards.map((card, i) => (
            <div key={i} className="flex">
              <ResCard
                key={i}
                title={card.Title}
                description={card.Description}
                link={card.Link}
                image={card.Image[0].url}
              />
            </div>
          ))}
    </div>
  );
};

export default ResCards;
