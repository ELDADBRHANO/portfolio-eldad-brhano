import { Routes, Route } from "react-router-dom";
import { Home,NotFound,About,Contact } from "./components/pages";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
