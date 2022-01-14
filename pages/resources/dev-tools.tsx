import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";
import useSWR from "swr";
import Airtable from "airtable";
import ResCard from "../../components/resources/card";

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

const VC = () => {
  const url = "/api/getTable?table=DevTools";
  const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Paylaod, string>(url, fetcher);
  if (error) console.log(error);

  const cards = data === undefined ? undefined : data.res;

  console.log(cards);

  return (
    <ResLayout>
      <ResHeader
        title="Dev Tools"
        description="Boost your development performance with some handy tools"
      />
      <div className="flex flex-wrap gap-8">
        {cards === undefined
          ? null
          : cards.map((card, i) => (
              <div className="flex">
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
    </ResLayout>
  );
};

export default VC;
