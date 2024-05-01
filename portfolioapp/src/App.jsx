import About from "./components/About";
import Home from "./components/Home";
import Certifiations from "./components/Certifications";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Certifications" element={<Certifiations></Certifiations>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
};
export default App;
