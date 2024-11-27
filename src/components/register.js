import { Link } from "react-router-dom";
import Logo from './favicon.png';
import GoogleIcon from './images/google-icon.svg';
import LinkedIcon from './images/linkedin-icon.svg';
import FacebookIcon from './images/facebook-icon.svg';

function Register(){
    return (
        <>
            <section className="wrapper mb-3">
                <div className="container mt-5">
                    <div className="align-items-center justify-content-center w-50 m-auto">
                        <form className="rounded bg-white shadow p-5 m-2">
                            <div className="logo">
                                <img className="img-fluid p-2 w-25" src={Logo} alt="Logo" />
                            </div>
                            <h3 className="text-dark fw-bolder fs-4 mb-2">Sign Up to Agrivive</h3>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className="form-check mx-2 m-3">
                                    <input className="form-check-input" type="radio" name="exampleRadio" id="LandOwner" value="option1" />
                                        <label className="form-check-label" for="radio1">
                                            Land Owner
                                        </label>
                                </div>
                                <div className="form-check mx-2 m-3">
                                    <input className="form-check-input" type="radio" name="exampleRadio" id="Tenent" value="option1" checked />
                                        <label className="form-check-label" for="radio1">
                                            Tenent Registration
                                        </label>
                                </div>
                            </div>
                            <div className="form-floating mb-2 ">
                                <input type="email" className="form-control" id="Username" placeholder="name@example.com" />
                                <label for="floatingInput">First Name</label>
                            </div>
                            <div className="form-floating mb-2 ">
                                <input type="email" className="form-control" id="Username" placeholder="name@example.com" />
                                <label for="floatingInput">Last Name</label>
                            </div>
                            <div className="form-floating mb-2 ">
                                <input type="email" className="form-control" id="Username" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="password" className="form-control" id="Password" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating ">
                                <input type="password" className="form-control" id="Password" placeholder="Password" />
                                <label for="floatingPassword">Confirm Password</label>
                            </div>
                            <button id="ContinueButton" type="submit" className="submit_btn btn btn-md btn-success w-100 my-4 p-2">Create an Account</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;