import Logo from './favicon.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GoogleIcon from './images/google-icon.svg';
import LinkedIcon from './images/linkedin-icon.svg';
import FacebookIcon from './images/facebook-icon.svg';
import InstagramIcon from './images/instagramLogo.jpeg'
import Footer from './footer';
import Login from './login';

function LoginPage() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/loginPage");
    }

    return (
        <>
            <section className='border container-fluid d-flex align-items-center justify-content-center p-5'>
                <Login/>
            </section>
        </>
    );
}

export default LoginPage;