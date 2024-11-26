import Logo from './favicon.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GoogleIcon from './images/google-icon.svg';
import LinkedIcon from './images/linkedin-icon.svg';
import FacebookIcon from './images/facebook-icon.svg';

function Register() {

    return (
        <>
            <section className="wrapper mb-3">
                <div className="container mt-5">
                    <div className="align-items-center justify-content-center w-50 m-auto">
                        <form className="rounded bg-white shadow p-5 m-2">
                            <div className="logo">
                                <img className="img-fluid p-2 w-25" src={Logo} alt="Logo" />
                            </div>
                            <h3 className="text-dark fw-bolder fs-4 mb-2">Sign into Agrivive</h3>
                            <div className="fw-normal text-muted mb-2">
                                New Here? <a href="#" className="text-success text-decoration-none fw-bold">Create an Account</a>
                            </div>
                            <div className="form-floating mb-2 ">
                                <input type="email" className="form-control" id="Username" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating ">
                                <input type="password" className="form-control" id="Password" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="mt-2 text-end">
                                <Link className="text-secondary text-decoration-none fw-bold" to="/register/forgotPassword">Forget Password</Link>
                            </div>
                            <button id="ContinueButton" type="submit" className="submit_btn btn btn-md btn-success w-100 my-4 p-2">Continue</button>
                            <div className="text-center text-uppercase text-muted mb-3"><b>OR</b></div>
                            <div className='m-2 d-block'>
                                <div className='d-block bg-light m-2'>
                                    <img className='me-2 p-1' src={GoogleIcon}></img>
                                    <Link to={"https://www.google.com"} target='_blank' className='p-2 text-dark text-decoration-none me-2 p-2'>Continue with google</Link>
                                </div>
                                <div className='d-block bg-light m-2'>
                                    <img className='me-2 p-1' src={FacebookIcon}></img>
                                    <Link to={"https://www.facebook.com"} target='_blank' className='p-2 text-dark text-decoration-none me-2 p-2'>Continue with facebook</Link>
                                </div>
                                <div className='d-block bg-light m-2'>
                                    <img className='me-2 p-1' src={LinkedIcon}></img>
                                    <Link to={"https://www.linkedin.com"} target='_blank' className='p-2 text-dark text-decoration-none me-2 p-2'>Continue with linkedin</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <section className="bg-dark">
                <div className="container">
                    <div className="text-center text-light">
                        <h1 className="py-5 mt-5 mb-3">This is the footer for the webpage</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis, eos dignissimos quasi necessitatibus corporis illum enim ullam odio saepe iure iusto ut temporibus voluptates tempore veniam hic cupiditate alias.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptatem, voluptates neque commodi laudantium earum quisquam deleniti quo facilis! Repudiandae eum fuga velit, tempora esse nihil laudantium exercitationem molestias corporis.
                        </p>
                        <p><u>Make sure you follow our social media pages</u></p>
                        <div className="social_icons text-center text-light p-3">
                            <i className="fab fa-twitter p-1"></i>
                            <i className="fab fa-facebook p-1"></i>
                            <i className="fab fa-instagram p-1"></i>
                            <i className="fab fa-linkedin p-1"></i>
                            <i className="fab fa-youtube p-1"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;