import Hero from "../../components/Hero/Hero";
import Matches from "../../components/Matches/Matches";
import Awards from "../../components/Awards/Awards";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Matches />
      <Awards />
    </div>
  );
};

export default Home;
