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
import Insurance from './images/insurance.png';
import FarmerShakingHands from './images/farmerhandshake.jpg';

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
                            <h5 className='lead fs-3'>This model ensures that landowners who cannot actively farm their land still benefit from its potential. By partnering with Agrivive, they can rest assured that their land is being farmed efficiently and profitably, contributing to the agricultural economy while generating a reliable income.</h5>
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
                {/* Crop Insurance */}
                <section className="container-fluid bg-light p-2">
                    <div className="m-2 d-flex align-items-center justify-content-center">
                        <div className="m-1">
                            <div className="border-bottom border-success text-start p-2 m-2">
                                <h1>Our Crop Insurance Procedure at Agrivive</h1>
                            </div>
                            <div className="text-start p-2 mt-2 mx-2">
                                <p>Farming, while rewarding, comes with its fair share of risks. The unpredictability of weather patterns, pest infestations, and crop diseases can pose significant threats to agricultural operations. At Agrivive, we understand these challenges and are committed to helping farmers secure their investments. By partnering with reputable insurance providers, we offer a comprehensive Crop Insurance Facilitation service designed to protect your livelihood.</p>
                            </div>
                            <div className="text-start p-2 mx-5">
                                <h2>How Agrivive's Crop Facilitation Works ?</h2>
                                <div className="p-2 m-2">
                                    <ol>
                                        <li>
                                            <p><b>Risk Assessment : </b> Our journey begins with an in-depth analysis of the risks specific to your region and chosen crops. We consider historical weather data, pest activity, and disease prevalence to provide you with a clear understanding of potential threats. This ensures you’re informed and adequately prepared.</p>
                                        </li>
                                        <li>
                                            <p><b>Policy Selection :</b> Once risks are assessed, we guide you in selecting the best insurance policy tailored to your needs. These policies provide coverage for crop failure due to natural disasters like droughts or floods, pest infestations, and diseases. Agrivive works with a network of trusted insurance providers to offer you a range of plans that fit your budget and farming requirements.</p>
                                        </li>
                                        <li>
                                            <p><b>Documentation and Enrollment : </b> Insurance can often involve cumbersome paperwork and formalities. Our team handles all documentation on your behalf, simplifying the enrollment process. From filling out application forms to submitting required documents, Agrivive ensures that the process is hassle-free and time-efficient.</p>
                                        </li>
                                        <li>
                                            <p><b>Claim Assistance : </b> In the unfortunate event of a loss, we stand by you to help navigate the claims process. Our experts assist in filing claims accurately and ensure all necessary details are submitted to expedite the reimbursement process. Agrivive’s proactive support ensures you receive your benefits without unnecessary delays.</p>
                                        </li>
                                    </ol>
                                    <div className="d-flex align-items-center justify-items-center m-2 p-2">
                                        <div className="text-center m-2 p-2 w-50">
                                            <div className="border-bottom border-dark">
                                                <h3>How This Service Secures Your Future</h3>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center m-2">
                                                <div className="m-1 p-2">
                                                    <p>Agrivive’s crop insurance facilitation provides a safety net, allowing farmers to take calculated risks without the fear of catastrophic losses. This service not only protects your current investments but also ensures the sustainability of your farming operations for future seasons.</p>
                                                </div>
                                                <div className="m-2 p-2">
                                                    <img src={Insurance} alt="Show me" className="border shadow" style={{ width: '200px', height: '200px' }}></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-2 p-2 rounded bg-success shadow w-50 text-white">
                                            <div className="text-center border-bottom">
                                                <h3>Why Choose Agrivive for Crop Insurance Facilitation?</h3>
                                            </div>
                                            <div className="m-1 p-1">
                                                <ul>
                                                    <li><p>Protect your crops from a variety of risks, including weather extremities, pests, and diseases.</p></li>
                                                    <li><p>Our team of specialists helps you choose policies that align with your specific farming needs.</p></li>
                                                    <li><p>We handle all paperwork and administrative tasks, letting you focus on your farming operations.</p></li>
                                                    <li><p>Agrivive’s dedicated team ensures you receive your benefits promptly and efficiently.</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Economical Services */}
                <section className="container-fluid bg-white">
                    <div className="m-2 mx-5 p-2 text-success border-bottom border-success">
                        <h1>Economical Services</h1>
                    </div>
                    <div className="d-flex align-items-top justify-content-center ">
                        <div className="w-50 border m-3 p-2" >
                            <div className="m-2 border-bottom border-secondary">
                                <h3>Market Linkages and Supply Chain Management</h3>
                            </div>
                            <div className="text-start m-3 p-2">
                                <div>
                                    <p>One of the most critical challenges farmers face is getting fair prices for their produce. Agrivive bridges this gap by:</p>
                                </div>
                                <div className="m-1">
                                    <ol>
                                        <li>
                                            <p><b>Connecting Farmers to Buyers : </b> We establish direct links between farmers and wholesalers, retailers, and organic produce markets.</p>
                                        </li>
                                        <li>
                                            <p><b>Supply Chain Optimization : </b>From farm to market, we streamline transportation, storage, and delivery to ensure produce reaches buyers fresh and on time.</p>
                                        </li>
                                        <li>
                                            <p><b>Fair Pricing Assurance : </b>By eliminating middlemen, we guarantee farmers receive competitive prices for their crops.</p>
                                        </li>
                                    </ol>
                                </div>
                                <div className="m-2">
                                    <p>Consider a small-scale farmer growing organic vegetables in Karnataka. Traditionally, this farmer might sell their produce to a middleman, receiving a fraction of the market price. Through Agrivive’s Market Linkages service, the farmer connects directly with urban organic stores. With our optimized supply chain, the vegetables are transported fresh to city markets, and the farmer receives a competitive price promptly. This partnership results in higher income and long-term market reliability for the farmer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-50 border m-3 p-2" >
                            <div className="m-2 border-bottom border-secondary">
                                <h3>Profit Optimization Consulting</h3>
                            </div>
                            <div className="m-1 p-1">
                                <p>Agrivive goes beyond farming to ensure maximum profitability for your efforts. Our experts guide you on:</p>
                            </div>
                            <div className="m-1 p-1 text-start">
                                <ol>
                                    <li>
                                        <p><b>Crop Selection:</b> Choosing high-demand, high-value crops for your region.</p>
                                    </li>
                                    <li>
                                        <p><b>Cost Management:</b> Strategies to reduce operational costs without compromising quality.</p>
                                    </li>
                                    <li>
                                        <p><b>Value Addition: </b>Techniques to transform raw produce into market-ready products (e.g., packaged organic spices).</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Services;
