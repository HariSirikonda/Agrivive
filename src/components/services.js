import Img from './images/happyfarmer.jpg';
import Loans from './images/loans.png';
import Marketing from './images/Marketing.png';
import Ligal from './images/ligal.png';
import Testing from './images/testing.png';
import Inspection from './images/inspection.png';
import Shop from './images/shop.png';
import Soil from './images/soil.jpg';
import IndianFarmer from './images/indianhappyfarmer.jpg';
import ServicesImage from './images/fs.png';
import RiceCrops from './images/ricecrops.jpg';
import Plot from './images/plot.png';
import Profits from './images/profits.png';
import CheckList from './images/check-list.png';
import Agreement from './images/agreement.png';

function Services() {
    return (
        <>
            <section>
                {/* Header */}
                <section className="container-fluid align-items-center justify-content-center">
                    <h1 className="display-4 text-center text-success">Our Services</h1>
                    <p>Agrivive is full of services that a former as well as an Agricultural land owner needs. You just need to join us for all the services we offer. All in one service within one place. Agrivive the life of Land</p>
                    <hr />
                </section>
                {/* Financial Services section */}
                <section className="container-fluid d-flex bg-light text-start p-2">
                    <div className='m-2 p-2'>
                        <h1 className="p-2 text-center">Financial Services</h1>
                        <p className="text-center">Agrivive understands that starting or expanding a farming operation can be financially challenging. Our crop financing assistance is designed to ease this burden by providing farmers with access to low-interest loans and grants. When you approach Agrivive for financing, we guide you through the following steps:</p>
                        <div className="container-fluid m-2">
                            <div className="m-2 p-2 text-start">
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className='m-2 p-2'>
                                        <h4 className='text-center'>Agrivive Values Soil health more than Credit Score</h4>
                                        <p className='text-center'>
                                            At Agrivive, we firmly believe that understanding your unique farming aspirations is the cornerstone of building a successful partnership. This stage, which we call the Assessment of Requirements, is not just a routine conversation but a transformative experience designed to set you on the right path. Our approach goes beyond numbers and documents; it's about understanding your dreams, challenges, and the vision you have for your land.
                                            When you step into Agrivive for financial assistance, you're not just another customer; you're a valued partner. Our financial experts invest their time and effort into creating a comfortable and welcoming environment where you can share your plans openly. Whether you are looking to cultivate your first crop, diversify into organic farming, or expand your existing operations, we are here to listen, guide, and support.
                                        </p>
                                    </div>
                                    <div className='w-50 d-flex align-items-center justify-content-center'>
                                        <img src={RiceCrops} className='m-2 rounded shadow border-success' style={{ width: '300px', height: '300px' }}></img>
                                        <img src={IndianFarmer} className='m-2 rounded shadow border-success' style={{ width: '300px', height: '300px' }}></img>
                                    </div>
                                </div>
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
                                <button className='btn btn-success m-2' type='submit'>
                                    <i className="fa-solid fa-landmark mx-2"></i>
                                    Apply for a loan
                                </button>
                                <button className='btn btn-secondary border m-2' type='submit'>
                                    <i className="fa-solid fa-money-bill mx-2"></i>
                                    Claim Your Insurance
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Revenue Sharing Models Section */}
                <section className='container-fluid p-2'>
                    <div className='m-2 p-2'>
                        <h1 className='text-success'>Revenue Sharing Models</h1>
                        <p>At Agrivive, we understand that many landowners may not have the time or expertise to farm their land directly. To address this, we offer flexible Revenue Sharing Models, designed to ensure that landowners can still benefit from their assets without the day-to-day involvement in farming operations. Our model allows landowners to generate a steady income, even if they are unable to actively farm their land.</p>
                    </div>
                    {/* Revenue Sharing Models Cards */}
                    <div className='container-fluid d-flex align-items-top justify-content-center p-2'>
                        <div className='border text-center m-2 border p-3 w-25'>
                            <img src={Plot} className='m-3' style={{ width: '100px', height: '100px' }} alt='show me'></img>
                            <h4>1. Land Evaluation</h4>
                            <p>We start by thoroughly assessing your land. Our experts evaluate the size, fertility, and overall potential of the soil. This helps us determine the most suitable crops and farming methods that can be implemented to ensure maximum productivity. Every piece of land is unique, and our detailed assessment ensures that we can tailor our approach accordingly.</p>
                        </div>
                        <div className='border text-center m-2 border p-3 w-25'>
                            <img src={Agreement} className='m-3' style={{ width: '100px', height: '100px' }} alt='show me'></img>
                            <h4>2. Agreement Formation</h4>
                            <p>Once we have evaluated the land, we draft a transparent and mutually beneficial agreement with the landowner. This agreement clearly outlines the profit-sharing terms, the responsibilities of both parties, and the expected outcomes. Our focus is on building trust and ensuring that the landowner fully understands their role in the process, even though they are not directly involved in day-to-day farming operations.</p>
                        </div>
                        <div className='border text-center m-2 border p-3 w-25'>
                            <img src={CheckList} className='m-3' style={{ width: '100px', height: '100px' }} alt='show me'></img>
                            <h4>3. Farming Operations</h4>
                            <p>Agrivive takes on all aspects of the farming process, from the initial sowing of seeds to the final harvest. We employ the best farming practices, utilizing modern agricultural techniques and technologies to ensure optimal productivity. This includes managing soil health, crop rotation, pest control, and irrigation. By handling all operational aspects, we remove the burden of farming from the landowner while ensuring the land is farmed efficiently.</p>
                        </div>
                        <div className='border text-center m-2 border p-3 w-25'>
                            <img src={Profits} className='m-3' style={{ width: '100px', height: '100px' }} alt='show me'></img>
                            <h4>4. Profit Distribution</h4>
                            <p>Once the harvest is complete, Agrivive handles the sale of produce and ensures the landowner receives their share of the profits. The distribution is simple and transparent: the profits are directly transferred to the landowner's bank account. This eliminates any hassle for the landowner, ensuring a smooth and timely payout.</p>
                        </div>
                    </div>
                    {/* Questions on Revenue Sharing Models */}
                    <div className='container-fluid d-flex align-items-center justify-content-center'>
                        <div className='p-5 m-5 w-50 text-center'>
                            <h5>This model ensures that landowners who cannot actively farm their land still benefit from its potential. By partnering with Agrivive, they can rest assured that their land is being farmed efficiently and profitably, contributing to the agricultural economy while generating a reliable income.</h5>
                        </div>
                        <div className='p-2 rounded bg-success text-light shadow w-50 m-5'>
                            <h3 className='m-2 p-2 border-bottom border-white'>Why Choose our Revenue Sharing Models ?</h3>
                            <div className='text-start'>
                                <ul>
                                    <li>
                                        <p>
                                            <b>Hassel-free : </b>
                                            Landowners can enjoy the benefits of farming without the need for direct involvement.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>Transparent : </b>
                                            We provide clear terms and transparent operations, ensuring that both parties are always on the same page.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>Sustainable Income : </b>
                                            Our farming practices are designed to generate steady, long-term income for landowners.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>Expert Management : </b>
                                            Agrivive’s team of agricultural experts ensures the land is farmed using the most effective and sustainable practices.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Services;
