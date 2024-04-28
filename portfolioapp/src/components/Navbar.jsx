import "../css/navbar.css"
import logo from "../assets/web.png"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <img src={logo} alt="" className="logoimg"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">certifiations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link" href="#">project</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};
export default Navbar;
