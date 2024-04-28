import Navbar from "../components/Navbar";
import myimg from "../assets/myimg.png";
import academicimg from "../assets/graduate.gif";
import "../css/about.css";
import pg from "../assets/graduated.png";
import graduate from "../assets/graduation.png";
import secondaryedu from "../assets/book1.png";
import primaryedu from "../assets/book.png";
const About = () => {
  return (
    <>
      <div className="aboutme">
        <header>
          <Navbar></Navbar>
          <hr
            class="border border-3 opacity-75"
            style={{ width: "90%", margin: "auto" }}
          ></hr>
        </header>
        <main className="mainabout">
          <div className="myimage">
            <img src={myimg} alt="" height={600} />
          </div>
          <div className="aboutmedata">
            <h1>About Me</h1>
            <p>
              &ldquo;I am a passionate and dedicated web developer with a keen
              interest in creating <br />
              responsive, user-friendly websites. With a background in Computer
              Science and <br />
              a strong foundation in web technologies, I strive to deliver
              high-quality solutions <br />
              that meet client requirements and exceed expectations.&rdquo;
            </p>
            <p>
              &ldquo;Dynamic and result-oriented with a Master's degree in
              Computer Applications (MCA) <br />
              and a Bachelor's degree in Computer Applications (BCA). Proficient
              in MERN stack <br />
              development through an internship at Excellence Technology,
              Mohali, and as a Trainee <br />
              Software Engineer at Vaayuja Info Solutions, Hyderabad. Skilled in
              front-end web <br />
              development technologies including HTML, CSS, JavaScript, React,
              and Bootstrap. <br />
              Possess a certification in Python and a strong passion for
              programming and <br />
              development.&rdquo;
            </p>
          </div>
        </main>
        <section>
          <div className="academics">
            <div className="heading">
              <img src={academicimg} alt="" height={80} />
              <h1>ACADEMICS</h1>
            </div>
            <div className="card">
              <h2>
                Master of Computer Application - MCA{" "}
                <img height={70} src={pg} alt="" />
              </h2>
              <h3>Himachal Pradesh University - 2023</h3>
              <h4>80%</h4>
              <p>
                &ldquo;During my MCA program, I gained a deep understanding of
                computer science concepts and specialized in web development. I
                undertook various projects and coursework that honed my skills
                in programming, software development, and database
                management.&rdquo;
              </p>
            </div>
            <div className="card">
              <h2>
                Bachelor of Computer Application - BCA{" "}
                <img height={70} src={graduate} alt="" />
              </h2>
              <h3>Rajeev Gandhi Govt. Degree College - 2018 - 2021</h3>
              <h4>6.98 CGPA</h4>
              <p>
                {" "}
                &ldquo;My BCA program provided me with a solid foundation in
                computer applications and programming languages. I learned key
                concepts in data structures, algorithms, and software
                engineering, which laid the groundwork for my career in web
                development.&rdquo;
              </p>
            </div>
            <div className="card">
              <h2>
                Higher Secondary Education - 12th Class{" "}
                <img height={70} src={secondaryedu} alt="" />
              </h2>
              <h3>St. Thomas School - 2018</h3>
              <h4>62%</h4>
              <p>
                &ldquo;My higher secondary education helped me develop a strong
                academic background and provided me with essential skills in
                critical thinking and problem-solving.&rdquo;
              </p>
            </div>
            <div className="card">
              <h2>
                Secondary Education - 10th Class{" "}
                <img height={70} src={primaryedu} alt="" />
              </h2>
              <h3>Shimla Public School - 2016</h3>
              <h4>67%</h4>
              <p>
                &ldquo;My secondary education instilled in me a passion for
                learning and a strong work ethic, which have been instrumental
                in my academic and professional journey.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
