import { Link } from "react-router-dom";
import Logo from './favicon.png';
import GoogleIcon from './images/google-icon.svg';
import LinkedIcon from './images/linkedin-icon.svg';
import FacebookIcon from './images/facebook-icon.svg';
import { useState } from 'react';

function Register() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <>
            <section className="wrapper mb-3">
                <div className="container mt-5">
                    <div className="d-flex align-items-center justify-content-center w-50 m-auto">
                        <form className="rounded bg-white shadow py-3 px-5 m-2 border" style={{ width: '500px', height: '500px' }}>
                            <h3 className="text-dark fw-bolder fs-4">Sign Up to Agrivive</h3>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className="form-check mx-2 m-3">
                                    <input className="form-check-input" type="radio" name="exampleRadio" id="LandOwner" value="option1" />
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
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">First Name</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Last Name</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Email Name</span>
                                <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Phone Number</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
                                <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Confirm Password</span>
                                <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="text-center w-100 mt-1 p-1">
                                <input className="m-2" type="checkbox" value="TermsAccepted" checked={isChecked} onChange={handleCheckboxChange} />
                                <label className="mt-1 mb-1">Accept Terms and Conditions</label>
                            </div>
                            <button id="ContinueButton" type="submit" disabled={!isChecked} className="submit_btn btn btn-md btn-success w-100 my-1 p-2">Continue to <b>Sign up</b></button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;