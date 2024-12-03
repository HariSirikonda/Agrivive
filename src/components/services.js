import Img from './images/happyfarmer.jpg';
import Loans from './images/loans.png';
import Marketing from './images/Marketing.png';
import Ligal from './images/ligal.png';
import Testing from './images/testing.png';
import Inspection from './images/inspection.png';
import Shop from './images/shop.png';
import Farmer from './images/happyfarmer.jpg';
import ServicesImage from './images/fs.png';

function Services() {
    return (
        <>
            <section>
                <div className="container-fluid align-items-center justify-content-center">
                    <h1 className="display-4 text-center text-success">Our Services</h1>
                    <p>Agrivive is full of services that a former as well as an Agricultural land owner needs. You just need to join us for all the services we offer. All in one service within one place. Agrivive the life of Land</p>
                    <hr />
                </div>
                <div className="container d-flex bg-light text-start p-2">
                    <div className='m-2 p-2 w-50'>
                        <h1 className="p-2 text-center">Financial Services</h1>
                        <p className="text-center">Agrivive understands that starting or expanding a farming operation can be financially challenging. Our crop financing assistance is designed to ease this burden by providing farmers with access to low-interest loans and grants. When you approach Agrivive for financing, we guide you through the following steps:</p>
                        <div className="container-fluid m-2">
                            <div className="m-2 p-2 text-start">
                                <h4 className='text-center'>Agrivive Values Soil health more than Credit Score</h4>
                                <p className='text-center'>
                                    At Agrivive, we firmly believe that understanding your unique farming aspirations is the cornerstone of building a successful partnership. This stage, which we call the Assessment of Requirements, is not just a routine conversation but a transformative experience designed to set you on the right path. Our approach goes beyond numbers and documents; it's about understanding your dreams, challenges, and the vision you have for your land.
                                    When you step into Agrivive for financial assistance, you're not just another customer; you're a valued partner. Our financial experts invest their time and effort into creating a comfortable and welcoming environment where you can share your plans openly. Whether you are looking to cultivate your first crop, diversify into organic farming, or expand your existing operations, we are here to listen, guide, and support.
                                </p>
                                <ul>
                                    <li>
                                        <p>We assist you in preparing the necessary documents, including a detailed farming plan, and ensure compliance with lending institutions' requirements.</p>
                                    </li>
                                    <li>
                                        <p>By partnering with banks and financial institutions, we expedite the loan approval process.</p>
                                    </li>
                                    <li>
                                        <p>Once approved, we ensure that the funds are disbursed efficiently and provide you with guidance on effective utilization.</p>
                                    </li>
                                </ul>
                                <p className='text-center'>With our support, you can invest confidently in seeds, equipment, and labor to turn your land into a thriving agricultural hub.</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-center m-2 p-2'>
                                <button className='btn btn-success m-2' type='submit'>Apply for a loan</button>
                                <button className='btn btn-secondary border m-2' type='submit'>Claim Your Insurance</button>
                            </div>
                        </div>
                    </div>
                    <div className='m-2 p-2 w-50 d-flex align-items-center justify-content-center'>
                        <div>
                            <img className='img-fluid' src={ServicesImage} alt='show me'></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
