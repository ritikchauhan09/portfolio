import About from "./components/About";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
    </>
  );
};
export default App;
