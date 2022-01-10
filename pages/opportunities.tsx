import Layout from "../components/layout/layout";
import SideBar from "../components/opportunities/sidebar";

const Opportunities = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="mr-auto">
          <SideBar />
        </div>
      </div>
    </Layout>
  );
};

export default Opportunities;
