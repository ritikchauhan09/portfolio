import "../css/intro.css"
import devimg from "../assets/img1.jpg"
const Intro = () =>{
    return(
    <>
    <div className="intromain">
    <div className="intro">
    <h1><span style={{color:"wheat",fontSize: "2rem"}}>HI, I'M RITIK</span> <br />
        I'M A WEB <br />
        <span style={{color:"#E65C19"}}>DEVELOPER</span> <br />
    </h1>

    <p> &ldquo; I am a passionate and dedicated web developer with expertise in  <br /> 
    front-end and  back-end technologies. My goal is to create efficient, <br /> 
    scalable, and user-friendly  web applications that meet and exceed <br />
    client expectations &rdquo;</p>
    </div>

    <div className="devimg">
        <img src={devimg} alt="" height={500}/>
    </div>
    </div>
    </>
    );
}
export default Intro;