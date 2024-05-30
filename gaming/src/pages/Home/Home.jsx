import Hero from "../../components/Hero/Hero";
import Matches from "../../components/Matches/Matches";
import Banner from "../../components/Banner/Banner";
import Awards from "../../components/Awards/Awards";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Matches />
      <Banner />
      <Awards />
    </div>
  );
};

export default Home;
