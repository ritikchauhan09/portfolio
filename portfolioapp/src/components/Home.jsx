import "../css/home.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
const Home = () => {
  return (
    <>
      <div className="homemain">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Intro></Intro>
        </main>
      </div>
    </>
  );
};
export default Home;
