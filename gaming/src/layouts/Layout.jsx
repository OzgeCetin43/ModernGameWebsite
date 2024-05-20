import ColorSwitcher from "../components/ColorSwitcher/ColorSwitcher";
import Navigation from "../components/Navigation/Navigation";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Navigation />
      <div>
        <ColorSwitcher />
        <Routers />
      </div>
    </>
  );
};

export default Layout;
