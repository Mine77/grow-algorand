import Layout from "../../components/layout/layout";
import SideBar from "./sidebar";

const ExLayout = (props: { children: React.ReactNode }) => {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex mt-10 border-r-2 border-gray-100">
          <SideBar />
        </div>
        <div className="flex px-4">
          <div>{props.children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default ExLayout;
