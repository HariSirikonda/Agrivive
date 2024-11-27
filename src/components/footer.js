import {Link} from 'react-router-dom';

function Footer() {
    return (
        <>
            <section className='container-fluid bg-success text-light'>
                <div className='container-fluid d-flex align-items-center justify-content-center border-bottom m-2 p-2'>
                    <div className='w-25 m-3 p-3 border-end border-3'>
                        <h2 className='text-light'>A Member of Agrivive Family Provides you</h2>
                    </div>
                    <div className='w-75 m-3 p-3'>
                        <Link className='mx-3 fs-5 p-2 text-decoration-none text-light'>Agrivive Extensive Services</Link>|
                        <Link className='mx-3 fs-5 p-2 text-decoration-none text-light'>Agrivive REsearch and Development</Link>|
                        <Link className='mx-3 fs-5 p-2 text-decoration-none text-light'>Agrivive Forest Service</Link>|
                        <Link className='mx-3 fs-5 p-2 text-decoration-none text-light'>Agrivive Veternery Medical Diagnostics Lab</Link>|
                        <Link className='mx-3 fs-5 p-2 text-decoration-none text-light'>Agrivive College of Agriculture and Life sciences</Link>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center m-2 p-2 border-bottom'>
                    <div className='w-25 text-start'>
                        <h1>Agrivive LTD</h1>
                        <p className='m-1'><b>India's A&M Life</b></p>
                        <p className='m-1'>Phone : +91 8790****84</p>
                        <p className='m-1'>News@agrivive.com</p>
                    </div>
                    <div className='w-25 text-start p-2 m-2'>
                        <p><b>MORE INFORMATION</b></p>
                        <ul>
                            <li>
                                <a className='lead text-decoration-none text-light'>Subscribe</a>
                            </li>
                            <li>
                                <a className='lead text-decoration-none text-light'>Resources for press and media</a>
                            </li>
                            <li>
                                <a className='lead text-decoration-none text-light'>Story Suggestion</a>
                            </li>
                            <li>
                                <a className='lead text-decoration-none text-light'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-25 text-start m-2 p-2'>
                        <p><b>FIND US ON SOCIAL MEDIA</b></p>
                        <div className='mx-4'>
                            <a className="m-2 text-light" href="https://facebook.com" target="_blank"><i class="bi bi-facebook"></i></a>
                            <a className="m-2 text-light" href="https://twitter.com" target="_blank"><i class="bi bi-twitter"></i></a>
                            <a className="m-2 text-light" href="https://instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
                            <a className="m-2 text-light" href="https://linkedin.com" target="_blank"><i class="bi bi-linkedin"></i></a>
                            <a className="m-2 text-light" href="https://youtube.com" target="_blank"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <div className='w-25 m-2 p-2'>
                        <h5 className='text-start'>About Agrivive University</h5>
                        <div className='border w-50 mx-4 p-2'>
                            <h6 className='lead'>Member of <b>Indian Agro based company</b></h6>
                        </div>
                    </div>
                </div>
                <div className='mt-2 p-4'>
                    <a className='m-2 p-2 text-decoration-none text-light'>Compact With Agrivive</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>Privacy & Security</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>Accessibility Policy</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>State Link Policy</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>State Wide Search</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>veterans Benefits</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>Military Families</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>Risk, Fruad and Misconduct Hotline</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>Agrivive Homeland Security</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>Agrivive Veterans Portal</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>Equal Opportunity</a>|
                    <a className='m-2 p-2 text-decoration-none text-light'>Open Records & Public Information</a>
                </div>
            </section>
        </>
    );
}

export default Footer; 