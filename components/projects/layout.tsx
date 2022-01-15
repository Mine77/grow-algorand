import Layout from "../layout/layout";
import Filter from "./filter";

const ProjectLayout = (props: { children: React.ReactNode }) => {
  return (
    <Layout>
      <div className="flex flex-row">
        <div className="flex mt-10 border-r-2 border-gray-100">
          <Filter />
        </div>
        <div className="flex px-4">
          <div>{props.children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectLayout;
