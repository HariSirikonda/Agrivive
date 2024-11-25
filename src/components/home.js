import Img1 from './images/field-5430070_1280.jpg';
import Img2 from './images/filtering.png';
import Img3 from './images/planting.png';
import Img4 from './images/Pluging.png';

function Home() {
    const myStyle = {
        backgroundImage : `url(${Img1})`,backgroundSize : 'cover', backgroundRepeat: 'no-repeat',
    };
    return (
        <>
            <section className='Intro container-fluid'>
                <div className='row m-2 p-2'>
                    <div className='col-8 d-flex align-items-center justify-content-center  '>
                        <div className='squareContainer p-5'>
                            <h4>Agrivive Welcomes you...</h4>
                            <h1 className='text-success'>Empowering farmers and Nuturing India's Future</h1>
                            <p className='lead'>Looking for an oppurtunity to make use of your unused lands ? You have come to the right place... We are here to help you earn a considerable income from your land. handover your land for a considerable income monthly on time. Who knows ? your financial freedon might start over here with us. Your liabilities turns Assets. What are you waiting for ? Sign up fast and start your journey towards financial freedom.</p>
                            <p className='lead text-success'><b>100%</b> satisfied <b>Yeild Returns</b></p>
                            <button className='btn btn-success m-2' type='submit'>Register</button>
                            <button className='btn btn-light m-2' type='submit'>Login</button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={Img3} alt='show me'></img>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
