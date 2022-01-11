import type { NextPage } from "next";
import Layout from "../components/layout/layout";
import EventsHero from "../components/overview/eventsHero";
import HomeHero from "../components/overview/homeHero";
import JobsHero from "../components/overview/jobsHero";
import ProjectHero from "../components/overview/projectHero";
import ResHero from "../components/overview/resHero";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeHero />
      <ResHero />
      <ProjectHero />
      <EventsHero />
      <JobsHero />
    </Layout>
  );
};

export default Home;
