import { banner } from "../../assets/data/banner";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      {banner.map((item) => (
        <img key={item.id} src={item.image} alt="banner item" />
      ))}
    </div>
  );
};

export default Banner;
