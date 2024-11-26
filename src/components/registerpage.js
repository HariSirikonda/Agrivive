function Register() {
    return (
        <>
            <section class="wrapper mb-3">
                <div class="container">
                    <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                        <div class="logo">
                            <img class="img-fluid p-2" src="images/logo.webp" alt="Logo"/>
                        </div>
                        <form class="rounded bg-white shadow p-5">
                            <h3 class="text-dark fw-bolder fs-4 mb-2">Sign into Hari's Webpage</h3>
                            <div class="fw-normal text-muted mb-2">
                                New Here? <a href="#" class="text-primary text-decoration-none fw-bold">Create an Account</a>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="Username" placeholder="name@example.com"/>
                                    <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="Password" placeholder="Password"/>
                                    <label for="floatingPassword">Password</label>
                            </div>
                            <div class="mt-2 text-end">
                                <a href="#" class="text-primary text-decoration-none fw-bold">Forget Password</a>
                            </div>
                            <button id="ContinueButton" type="submit" class="submit_btn btn btn-primary w-100 my-4" onclick="submitLogin()">Continue</button>
                            <div class="text-center text-uppercase text-muted mb-3">or</div>
                            <a href="https://www.google.com/" target="_blank" class="btn btn-light login_with w-100 mb-3">
                                <img src="images/google-icon.svg" class="img-fluid me-3"/>
                                    Continue with Google
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" class="btn btn-light login_with w-100 mb-3">
                                <img src="images/facebook-icon.svg" class="img-fluid me-3"/>
                                    Continue with Facebook
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" class="btn btn-light login_with w-100 mb-3">
                                <img src="images/linkedin-icon.svg" class="img-fluid me-3"/>
                                    Continue with Linked
                            </a>
                        </form>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <section class="bg-dark">
                <div class="container">
                    <div class="text-center text-light">
                        <h1 class="py-5 mt-5 mb-3">This is the footer for the webpage</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis, eos dignissimos quasi necessitatibus corporis illum enim ullam odio saepe iure iusto ut temporibus voluptates tempore veniam hic cupiditate alias.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptatem, voluptates neque commodi laudantium earum quisquam deleniti quo facilis! Repudiandae eum fuga velit, tempora esse nihil laudantium exercitationem molestias corporis.
                        </p>
                        <p><u>Make sure you follow our social media pages</u></p>
                        <div class="social_icons text-center text-light p-3">
                            <i class="fab fa-twitter p-1"></i> 
                            <i class="fab fa-facebook p-1"></i> 
                            <i class="fab fa-instagram p-1"></i>
                            <i class="fab fa-linkedin p-1"></i>
                            <i class="fab fa-youtube p-1"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;