import "../css/contact.css"
import Navbar from "../components/Navbar"
import contact from "../assets/contact.jpg"
const Contact = () =>{
    return(
    <>
        <div className="maincontact">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <br />
                <div className="mainc">
                    <div className="contactimg">
                        <img src={contact} alt="" />
                    </div>
                    <div className="contactdata">
                        <div className="data1">
                        <div className="email">
                            <img src="" alt="" />
                            <p>hritiksanhals@gmail.com</p>
                        </div>
                        <div className="number">
                            <img src="" alt="" />
                            <p>+91 8353039061</p>
                        </div>
                        <div className="adress">
                            <img src="" alt="" />
                            <p>Shimla, Himachal Pradesh</p>
                        </div>
                        </div>
                        <div className="data2">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    </>
    );
}
export default Contact;