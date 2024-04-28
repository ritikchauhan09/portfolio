import "./App.css"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Home from "./components/Home";
import {Router, Routes, Route} from "react-router-dom";
const App = () =>{
  return(
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/About" element={<About></About>}></Route>

    </Routes>
    
    </>
  )
}
export default App;