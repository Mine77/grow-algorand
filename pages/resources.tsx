import Layout from "../components/layout/layout";
import Grant from "../components/resources/grant";
import SideBar from "../components/resources/sidebar";

const Resources = () => {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex mt-10 border-r-2 border-gray-100">
          <SideBar />
        </div>
        <div className="flex px-4">
          <Grant />
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
