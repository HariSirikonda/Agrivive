import Logo from './favicon.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GoogleIcon from './images/google-icon.svg';
import LinkedIcon from './images/linkedin-icon.svg';
import FacebookIcon from './images/facebook-icon.svg';
import InstagramIcon from './images/instagramLogo.jpeg'
import Footer from './footer';

function Login() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/login");
    }

    return (
        <>
            <form className="rounded bg-white shadow p-5 m-2 border fade-in" style={{ width: '500px', height: '500px' }}>
                <h3 className="text-dark fw-bolder fs-4 mt-1">Login to Agrivive</h3>
                <div className="fw-normal text-muted mb-2">
                    New Here? <Link className="text-success text-decoration-none fw-bold" onClick={handleRegisterClick}>Create an Account</Link>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className="form-check mx-2 m-3">
                        <input className="form-check-input" type="radio" name="exampleRadio" id="Tenent" value="option1" />
                        <label className="form-check-label" for="radio1">
                            Buyer
                        </label>
                    </div>
                    <div className="form-check mx-2 m-3">
                        <input className="form-check-input" type="radio" name="exampleRadio" id="LandOwner" value="option1" />
                        <label className="form-check-label" for="radio1">
                            Land Owner
                        </label>
                    </div>
                    <div className="form-check mx-2 m-3">
                        <input className="form-check-input" type="radio" name="exampleRadio" id="Tenent" value="option1" checked />
                        <label className="form-check-label" for="radio1">
                            Tenent
                        </label>
                    </div>
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
                <button id="ContinueButton" type="submit" className="submit_btn btn btn-md btn-success w-100 my-2 p-1">Continue</button>
                <div className="text-center text-uppercase text-muted mb-1"><b>OR</b></div>
                <div className='m-2 d-flex align-items-center justify-content-center'>
                    <div className='bg-light m-2 d-flex align-items-center justify-content-center'>
                        <img className='m-1 p-0' src={GoogleIcon}></img>
                    </div>
                    <div className='bg-light m-2 d-flex align-items-center justify-content-center'>
                        <img className='m-1 p-0' src={FacebookIcon}></img>
                    </div>
                    <div className='bg-light m-2 d-flex align-items-center justify-content-center'>
                        <img className='m-1 p-0' src={LinkedIcon}></img>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;