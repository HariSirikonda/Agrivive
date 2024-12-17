import Navbar from "./navbar";
import Chat from './images/chat.png';
import PhoneCall from './images/phone-call.png';
import { Link } from 'react-router-dom';


function ContactUs() {
    return (
        <>
            <div className="container justify-content-center">
                <div className="m-2 p-2">
                    <h1 className="text-success">Contact Us</h1>
                </div>
                <hr/>
                <div className="m-2">
                    <p>Current Agrivive System status : </p>
                    <button className="btn btn-light m-0"><b>All systems operational</b></button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="bg-light border rounded m-2 p-5">
                        <img className="m-2" src={Chat} alt="show me" style={{width: '100px'}}></img>
                        <h4>Chat with us</h4>
                        <p><Link className="text-decoration-none"><b>Click Here</b></Link> to start chating with us</p>
                        <p><Link className="text-decoration-none"><b>Open 24/7</b></Link></p>
                    </div>
                    <div className="bg-light border rounded m-2 p-5">
                        <img className="m-2" src={PhoneCall} alt="show me" style={{width: '100px'}}></img>
                        <h4>Give us a Call</h4>
                        <p><Link className="text-decoration-none">855-CS-Agrivive</Link> or <Link className="text-decoration-none">855-277-555</Link></p>
                        <p><Link className="text-decoration-none"><b>Open 24/7</b></Link></p>
                    </div>
                </div>
                <div className="m-2 p-2">
                    <p>If you prefer to get help via Email, you can <Link className="text-decoration-none">Submit a request</Link> instead.</p>
                </div> 
            </div>
        </>
    );
}

export default ContactUs;
