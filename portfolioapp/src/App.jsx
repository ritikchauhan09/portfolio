import "./App.css"
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
const App = () =>{
  return(
    <>
    <div className="appmain">
      <header>
        <Navbar></Navbar>
      </header>
    <main>
      <Intro></Intro>
    </main>
    
    </div>
    </>
  )
}
export default App;