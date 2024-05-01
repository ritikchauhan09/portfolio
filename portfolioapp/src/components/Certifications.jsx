import "../css/certifications.css";
import Navbar from "../components/Navbar";
import certificate from "../assets/certificate.png"
const Certifiations = () => {
  return (
    <>
      <div className="maincertify">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <div className="maindata">
            <div className="exp">
              <div className="exp1">
                <h2>Work Experience</h2>
                <h3>Tr. Software Engineer</h3>
                <div className="comapny">
                  <h4>Vaayuja Infosolutions | Hyderabad</h4>
                  <h4>Dec 2023 - March 2024</h4>
                </div>
                <ul>
                  <li>
                    Acquired hands-on experience in web development technologies <br />
                    such as HTML, CSS, JavaScript, and React.js through training <br />
                    sessions and practical assignments.
                  </li>
                </ul>
              </div>

<hr />

              <div className="exp2">
                <h2>Intern</h2>
                <div className="comapny">
                  <h4>Excellence Technology | Mohali</h4>
                  <h4>Jan 2023 - July 2023</h4>
                </div>
                <ul>
                  <li>Gained hands-on experience in MERN stack development.</li>
                  <li>
                    Developed responsive and user-friendly web applications.
                  </li>
                  <li>
                    Assisted in troubleshooting and debugging code to ensure <br />
                    smooth operation of applications.
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-secondary"></div>
            <div className="certificate">
                <h2>Certificates</h2>
                <div className="certificate1">
                    <h4>MERN STACK WEB DEVELOPMENT</h4>
                    <img src={certificate} alt="" />
                </div>
                <div className="certificate1">
                    <h4>PYTHON</h4>
                    <img src={certificate} alt="" />
                </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Certifiations;
