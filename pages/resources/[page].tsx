import { useRouter } from "next/router";
import Button from "../../components/resources/button";
import ResFAQ from "../../components/resources/faq";
import ResHeader from "../../components/resources/header";
import ResLayout from "../../components/resources/layout";
import Custom404 from "../404";
import { PageContent } from "../../components/resources/pageContent";
import ResCards from "../../components/resources/cards";

const Bounty = () => {
  const router = useRouter();
  const page = String(router.query.page);
  const pageKey = page as keyof typeof PageContent;
  const pageContent = PageContent[pageKey];

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
      {pageContent.tableName ? (
        <ResCards tableName={pageContent.tableName} />
      ) : null}
    </ResLayout>
  );
};

export default Bounty;
