import Logo from './favicon.png';
import GoogleIcon from './images/google-icon.svg';
import LinkedIcon from './images/linkedin-icon.svg';
import FacebookIcon from './images/facebook-icon.svg';

function Register() {
    return (
        <>
            <section className="wrapper mb-3">
                <div className="container">
                    <div className='m-2 p-2'>
                        <h2>Complete Your registration Process</h2>
                    </div>
                    <div className="col-sm-8 d-flex offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 align-items-center justify-content-center">
                        <form className="rounded bg-white shadow p-5 m-2">
                            <div className="logo">
                                <img className="img-fluid p-2 w-25" src={Logo} alt="Logo"/>
                            </div>
                            <h3 className="text-dark fw-bolder fs-4 mb-2">Sign into Agrivive</h3>
                            <div className="fw-normal text-muted mb-2">
                                New Here? <a href="#" className="text-success text-decoration-none fw-bold">Create an Account</a>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="Username" placeholder="name@example.com"/>
                                    <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="Password" placeholder="Password"/>
                                    <label for="floatingPassword">Password</label>
                            </div>
                            <div className="mt-2 text-end">
                                <a href="#" className="text-secondary text-decoration-none fw-bold">Forget Password</a>
                            </div>
                            <button id="ContinueButton" type="submit" className="submit_btn btn btn-success w-100 my-4" onclick="submitLogin()">Continue</button>
                            <div className="text-center text-uppercase text-muted mb-3">or</div>
                            <a href="https://www.google.com/" target="_blank" className="btn d-inline-block btn-light login_with w-100 mb-3">
                                <img src={GoogleIcon} className="img-fluid me-3 h-25"/>
                                    Continue with Google
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" className="btn d-inline-block btn-light login_with w-100 mb-3">
                                <img src={FacebookIcon} className="img-fluid me-3 h-25"/>
                                    Continue with Facebook
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" className="btn d-inline-block btn-light login_with w-100 mb-3">
                                <img src={LinkedIcon} className="img-fluid me-3 h-25"/>
                                    Continue with Linked
                            </a>
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