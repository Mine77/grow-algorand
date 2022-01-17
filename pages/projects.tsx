import useSWR from "swr";
import Airtable from "airtable";
import Layout from "../components/layout/layout";
import Filter from "../components/projects/filter";
import ProjectCards, { Cards, FilterState } from "../components/projects/cards";
import { useState } from "react";
import Button from "../components/projects/button";

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

  const [filterState, setFilterState] = useState<FilterState>({
    category: [""],
    tags: [""],
  });

  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col mt-2">
          <div className="flex mt-6 border-r-2 border-gray-100">
            {cards === undefined ? null : (
              <Filter filterItem={filterItem} setFilterState={setFilterState} />
            )}
          </div>
          <div className="flex mt-2 items-end justify-end ml-8 mr-2">
            <Button
              text="Add Project"
              link="https://airtable.com/shrHn8BZjnbvF9BJG"
            />
          </div>
        </div>

        <div className="flex px-4 mt-12 flex-col">
          <ProjectCards cards={cards} filterState={filterState} />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
