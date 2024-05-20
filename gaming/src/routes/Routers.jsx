import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import NotFound from "../components/NotFound/NotFound";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
