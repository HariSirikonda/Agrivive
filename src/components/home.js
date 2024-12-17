import { useNavigate } from 'react-router-dom';
import Login from './login';
import { Link } from 'react-router-dom';
import Img1 from './images/field-5430070_1280.jpg';
import Img2 from './images/filtering.png';
import Img3 from './images/planting.png';
import Img4 from './images/Pluging.png';
import CarouselComponent from './carousel';
import Loans from './images/loans.png';
import Marketing from './images/Marketing.png';
import Ligal from './images/ligal.png';
import Testing from './images/testing.png';
import Inspection from './images/inspection.png';
import Shop from './images/shop.png';
import Farmer from './images/indianhappyfarmer.jpg';
import Profits from './images/farmerCash.jpg';
import Footer from './footer';
import Partner1 from './images/Partner1.png';
import Partner2 from './images/partner2.png';
import Partner3 from './images/partner3.jpeg';
import Partner4 from './images/partner4.png';
import Partner5 from './images/partner5.jpeg';
import Partner6 from './images/partner6.jpeg';
import Partner7 from './images/TCS.jpeg';
import Crops from './images/crops.jpg';
import RiceCrops from './images/ricecrops.jpg';
import DryLands from './images/drylands.jpg';
import { useState } from 'react';
import IntroImage from './introImage';
import ContactUs from './contactUs';

function Home({LoginClicked}) {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate("/register");
    };

    const handleLoginClick = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            {/* Intro section */}
            <section className='Intro container-fluid p-5'>
                <div className='row m-2 p-2'>
                    <div className='col-8 d-flex align-items-center justify-content-center'>
                        <div className='squareContainer p-5'>
                            <h4>Agrivive Welcomes you...</h4>
                            <h1 className='text-success'>Empowering farmers and Nuturing India's Future</h1>
                            <p>Looking for an oppurtunity to make use of your unused lands ? You have come to the right place... We are here to help you earn a considerable income from your land. handover your land for a considerable income monthly on time. Who knows ? your financial freedon might start over here with us. Your liabilities turns Assets. What are you waiting for ? Sign up fast and start your journey towards financial freedom.</p>
                            <p className='lead text-success'><b>100%</b> satisfied <b>Yeild Returns</b></p>
                            <button className='btn btn-success m-2' type='submit' onClick={handleRegisterClick}>Register</button>
                            <button className='btn btn-light m-2 border' type='submit' onClick={handleLoginClick}>Login</button>
                            <div className='newsletter d-flex m-3 p-3 align-items-center justify-content-center bg-light rounded'>
                                <h4 className='w-50'>Subscribe for our news letter</h4>
                                <input className='form-control m-2 w-50' placeholder='Enter your Email Id' id='Emailinput' type='email'></input>
                                <button className='btn btn-success m-2 w-25' type='submit' >Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        {isLogin ? (<Login />) : (<IntroImage />)}
                    </div>
                </div>
            </section>
            {/* Services section */}
            <section className='container-fluid p-5 bg-light' style={{backgroundColor: 'rgb(238, 255, 237)'}}>
                <h1 className='text-success'>Our Services</h1>
                <p>Agrivive is full of services that a former as well as an Agricultural land owner needs. You just need to join us for all the services we offer. All in one service within one place. Agrivive the life of Land</p>
                <div className='d-flex mx-5 mb-3'>
                    <div className="card d-flex w-25 m-2 p-2 align-items-center justify-content-center border-success">
                        <img src={Loans} className="card-img-top w-50" alt="Show me"></img>
                        <div className="card-body">
                            <h5 className="card-title">Financial Services</h5>
                            <p className="card-text">Learn about the farm loans that might be right for you, check your eligibility, and get instructional help with the application forms.</p>
                            <a href="#" className="btn btn-light">Learn more</a>
                        </div>
                    </div>
                    <div className="card d-flex w-25 m-2 p-2 align-items-center justify-content-center border-success">
                        <img src={Marketing} className="card-img-top w-50" alt="Show me"></img>
                        <div className="card-body">
                            <h5 className="card-title">Economical Services</h5>
                            <p className="card-text">Our marketing agents reach you at your land for scaling and marketing purpsoe. </p>
                            <a href="#" className="btn btn-light">Learn more</a>
                        </div>
                    </div>
                    <div className="card d-flex w-25 m-2 p-2 align-items-center justify-content-center border-success">
                        <img src={Testing} className="card-img-top w-50" alt="Show me"></img>
                        <div className="card-body">
                            <h5 className="card-title">Medical Services</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-light">Learn more</a>
                        </div>
                    </div>
                    <div className="card d-flex w-25 m-2 p-2 align-items-center justify-content-center border-success">
                        <img src={Ligal} className="card-img-top w-50" alt="Show me"></img>
                        <div className="card-body">
                            <h5 className="card-title">Ligal Services</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-light">Learn more</a>
                        </div>
                    </div>
                    <div className="card d-flex w-25 m-2 p-2 align-items-center justify-content-center border-success">
                        <img src={Inspection} className="card-img-top w-50" alt="Show me"></img>
                        <div className="card-body">
                            <h5 className="card-title">Technical Services</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-light">Learn more</a>
                        </div>
                    </div>
                    <div className="card d-flex w-25 m-2 p-2 align-items-center justify-content-center border-success">
                        <img src={Shop} className="card-img-top w-50" alt="Show me"></img>
                        <div className="card-body">
                            <h5 className="card-title">Environmental Services</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-light">Learn more</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Motive Section*/}
            <section className='container-fluid light-green d-flex p-5'>
                <div className='container-fluid w-50 d-flex align-items-center justify-content-center'>
                    <div>
                        <h1 className='text-success'>Our Motive</h1>
                        <p>We started Agrivive with a strong purpose: to help landowners unlock the potential of their land for sustainable income generation. Over the years, we’ve seen many families with a rich heritage of farming choose different career paths, leaving their ancestral lands unused. While this shift offers opportunities in various fields, it also raises an important question—how can we ensure that fertile lands are utilized effectively to contribute to food production and economic growth? Agrivive aims to bridge this gap by empowering landowners to turn their unused lands into a reliable source of income while promoting sustainable agricultural practices.</p>
                        <p><b>We are committed to transforming unused lands into thriving, crop-filled fields. This not only ensures a steady supply of food and a sustainable source of income but also revitalizes soil health, paving the way for future generations to continue and benefit from this cycle of growth.</b></p>
                    </div>
                </div>
                <div className='w-25 p-2'>
                    <h5>From This</h5>
                    <img className='img-fluid' src={DryLands} alt='show me'></img>
                </div>
                <div className='w-25 p-2'>
                    <h5>To This</h5>
                    <img className='img-fluid' src={RiceCrops} alt='show me'></img>
                </div>
            </section>
            {/* Our Partners Section */}
            <section className='bg-light container-fluid p-5'>
                <h1>Our partners</h1>
                <p>We partner with industry leading organizations with the common goal of providing exceptional service to our customers</p>
                <div className='d-block'>
                    <img className='img-fluid m-3' src={Partner1} style={{ width: '256px', height: '76px' }}></img>
                    <img className='img-fluid m-3' src={Partner2} style={{ width: '550px', height: '80px' }}></img>
                    <img className='img-fluid m-3' src={Partner3} style={{ width: '332px', height: '201px' }}></img>
                    <img className='img-fluid m-3' src={Partner4} style={{ width: '100px', height: '100px' }}></img>
                    <img className='img-fluid m-3' src={Partner5} style={{ width: '100px', height: '100px' }}></img>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;