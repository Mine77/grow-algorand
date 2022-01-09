import type { NextPage } from "next";
import Layout from "../components/layout/layout";
import HomeHero from "../components/overview/homeHero";
import HolderHero from "../components/overview/holderHero";
import DevHero from "../components/overview/devHero";
import ProjectHero from "../components/overview/projectHero";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeHero />
      <DevHero />
      <ProjectHero />
      <HolderHero />
    </Layout>
  );
};

export default Home;
