import useSWR from "swr";
import Airtable from "airtable";
import ExLayout from "../components/explore/layout";
import ExCard from "../components/explore/card";

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

const Explore = () => {
  const url = "/api/getTable?category=DevTools";
  const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Paylaod, string>(url, fetcher);
  if (error) console.log(error);

  const cards = data === undefined ? undefined : data.res;

  console.log(cards);

  return (
    <ExLayout>
      <div className="flex flex-wrap gap-8">
        {cards === undefined
          ? null
          : cards.map((card, i) => (
              <div key={i} className="flex">
                <ExCard
                  key={i}
                  title={card.Title}
                  description={card.Description}
                  link={card.Link}
                  image={card.Image[0].url}
                />
              </div>
            ))}
      </div>
    </ExLayout>
  );
};

export default Explore;