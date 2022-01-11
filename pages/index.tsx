import type { NextPage } from "next";
import Layout from "../components/layout/layout";
import HomeHero from "../components/overview/homeHero";
import HolderHero from "../components/overview/holderHero";
import DevHero from "../components/overview/devHero";
import ProjectHero from "../components/overview/projectHero";
import ResHero from "../components/overview/resHero";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeHero />
      <ResHero />
      {/* <DevHero />
      <ProjectHero />
      <HolderHero /> */}
    </Layout>
  );
};

export default Home;
