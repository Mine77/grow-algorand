import useSWR from "swr";
import Airtable from "airtable";
import Layout from "../components/layout/layout";
import Filter from "../components/projects/filter";
import ProjectCards from "../components/projects/cards";

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

const Projects = () => {
  const url = "/api/getProjects";
  const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<Paylaod, string>(url, fetcher);
  if (error) console.log(error);

  const cards = data === undefined ? undefined : data.res;

  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex mt-10 border-r-2 border-gray-100">
          <Filter />
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
