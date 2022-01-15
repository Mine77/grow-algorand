import useSWR from "swr";
import Airtable from "airtable";
import ResCard from "./card";

interface Card {
  Title: string;
  Description: string;
  Link: string;
  Image: Array<Airtable.Attachment>;
}

interface Cards extends Array<Card> {}

interface Paylaod {
  res: Cards;
}

const ProjectCards = (props: { tableName: string }) => {
  const url = `/api/getCards?name=${props.tableName}`;
  const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Paylaod, string>(url, fetcher);
  if (error) console.log(error);

  const cards = data === undefined ? undefined : data.res;

  return (
    <div className="flex flex-wrap gap-8">
      {cards === undefined
        ? null
        : cards.map((card, i) => (
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

export default ProjectCards;
