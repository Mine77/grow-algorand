import useSWR from "swr";
import Airtable from "airtable";
import Layout from "../components/layout/layout";
import Filter from "../components/projects/filter";
import ProjectCards, { Cards } from "../components/projects/cards";

export interface CardData {
  Title: string;
  Description: string;
  Link: string;
  Image: Array<Airtable.Attachment>;
  Category: string;
  Tags: Array<string>;
}

export interface CardsData extends Array<CardData> {}

interface Paylaod {
  res: CardsData;
}

const Projects = () => {
  const url = "/api/getProjects";
  const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Paylaod, string>(url, fetcher);
  if (error) console.log(error);

  const cardsData = data === undefined ? undefined : data.res;
  const cards: Cards | undefined = cardsData?.map((cardData) => {
    return {
      title: cardData.Title,
      description: cardData.Description,
      link: cardData.Link,
      image: cardData.Image[0].url,
      category: cardData.Category,
      tags: cardData.Tags,
    };
  });

  var filterItem: {
    category: string[];
    tags: string[];
  } = {
    category: [],
    tags: [],
  };

  cards?.map((card) => {
    if (!filterItem.category.includes(card.category)) {
      filterItem.category.push(card.category);
    }
    card.tags.map((tag) => {
      if (!filterItem.tags.includes(tag)) filterItem.tags.push(tag);
    });
  });

  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex mt-10 border-r-2 border-gray-100">
          {cards === undefined ? null : <Filter filterItem={filterItem} />}
        </div>
        <div className="flex px-4">
          <div>
            <ProjectCards cards={cards} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
