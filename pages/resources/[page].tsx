import { useRouter } from "next/router";
import Button from "../../components/resources/button";
import ResFAQ from "../../components/resources/faq";
import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";
import Custom404 from "../404";
import { PageContent } from "../../components/resources/pageContent";
import ResCards, { Cards } from "../../components/resources/cards";
import useSWR from "swr";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // this will be called server-side only
  const params = context.params;

  if (!params || !(String(params.page) in PageContent)) {
    return { notFound: true };
  }
  return {
    props: {
      page: params.page,
    },
  };
};

interface Props {
  page: string;
}

const Resources: NextPage<Props> = (props) => {
  const page = String(props.page);
  const pageKey = page as keyof typeof PageContent;
  const pageContent = PageContent[pageKey];

  const url =
    pageContent && pageContent.tableName
      ? `/api/getRes?name=${pageContent.tableName}`
      : null;
  const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<{ res: Cards }, string>(url, fetcher);
  if (error) console.log(error);
  const cardsData = data === undefined ? undefined : data.res;

  if (pageContent === undefined) return <Custom404 />;
  return (
    <ResLayout>
      <ResHeader
        title={pageContent.title}
        description={pageContent.description}
      />
      {pageContent.button ? (
        <Button text={pageContent.button.text} link={pageContent.button.link} />
      ) : null}
      {pageContent.faq ? <ResFAQ content={pageContent.faq} /> : null}
      {pageContent.tableName ? <ResCards cards={cardsData} /> : null}
    </ResLayout>
  );
};

export default Resources;
