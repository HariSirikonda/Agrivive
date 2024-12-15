import { Link } from 'react-router-dom';
import BusinessPeople from './images/Businesspeople.jpg';
import BusinessPeople2 from './images/Businesspeople2.jpg';

function Careers(){
    return(
        <section className="Careers-page">
            <section className="p-3">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="w-50 m-2 p-5">
                        <h1>We're Hiring for <span className="text-success">Talended Individuals</span></h1>
                        <p className="fs-4 lead">Who share our passion to be the best and Achieve their full potential.</p>
                        <p><b>Because when our associates success, we all do</b></p>
                        <div className='m-2 p-2 bg-light border rounded d-flex align-items-center justify-content-center'>
                            <input className='form-control m-2' type='text' placeholder='job Title or Category'></input>
                            <input className='form-control m-2' type='text' placeholder='City or Postal zip code'></input>
                            <button className='btn btn-success m-2' type='submit'>Search</button>
                        </div>
                        <Link className='text-decoration-none'>View All jobs</Link>
                    </div>
                    <div className="w-50 p-3 m-3 d-flex ">
                        <img className='shadow m-2' src={BusinessPeople} alt='show me' style={{width : '375px', height :'375px'}}></img>
                        <img className='shadow m-2' src={BusinessPeople2} alt='show me' style={{width : '375px', height :'375px'}}></img>
                    </div>
                </div>
            </section>
            
        </section>
    );
}

export default Careers;