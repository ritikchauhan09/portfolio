import Navbar from "../components/Navbar";
import myimg from "../assets/myimg.png";
import academicimg from "../assets/graduate.gif";
import "../css/about.css"
const About = () =>{
    return(
        <>
        <div className="aboutme">
        <header>
            <Navbar></Navbar>
            <hr class="border border-3 opacity-75" style={{width:"90%",margin:"auto"}}></hr>

        </header>
        <main className="mainabout">
            <div className="myimage">
                <img src={myimg} alt=""  height={600}/>
            </div>
            <div className="aboutmedata">
                <h1>About Me</h1>
                <p>I am a passionate and dedicated web developer with a keen interest in creating <br />
                 responsive, user-friendly websites. With a background in Computer Science and <br />
                 a strong foundation in web technologies, I strive to deliver high-quality solutions <br />
                 that meet client requirements and exceed expectations.</p>
                <p>Dynamic and result-oriented with a Master's degree in Computer Applications (MCA) <br />
                 and a Bachelor's degree in Computer Applications (BCA). Proficient in MERN stack <br />
                  development through an internship at Excellence Technology, Mohali, and as a Trainee <br />
                  Software Engineer at Vaayuja Info Solutions, Hyderabad. Skilled in front-end web <br />
                  development technologies including HTML, CSS, JavaScript, React, and Bootstrap. <br />
                  Possess a certification in Python and a strong passion for programming and <br />
                 development.
                </p>

            </div>

           
        </main>
        <section>
        <div className="academics">
                <div className="heading">
                    <img src={academicimg} alt="" height={80} />
                    <h1>ACADEMICS</h1>
                </div>
            </div>
        </section>
        </div>
        
        </>
    );
}
export default About;