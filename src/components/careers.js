import { Link } from 'react-router-dom';
import BusinessPeople from './images/Businesspeople.jpg';
import BusinessPeople2 from './images/Businesspeople2.jpg';
import Building from './images/building.png';
import Education from './images/education.png';
import HeartBeat from './images/heart-beat.png';
import PiggyBank from './images/piggy-bank.png';
import Slippers from './images/slippers.png';
import Umbrella from './images/umbrella.png';

function Careers(){
    return(
        <section className="Careers-page p-3">
            {/* Intro Section */}
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
            {/* Top talentn Section */}
            <section className='bg-light broder align-items-center justify-content-center p-3'>
                <div className='text-center p-2 m-2'>
                    <h2>How we keep Top Talent</h2>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='m-1 mx-3 p-2' style={{width: '150px', height: '180px'}}>
                        <img src={HeartBeat} alt='show me' style={{width: '100px' , height: '100px'}}></img>
                        <p className='text-success m-2'><b>Medical and Health Test</b></p>
                    </div>
                    <div className='m-1 mx-3 p-2' style={{width: '150px', height: '180px'}}>
                        <img src={PiggyBank} alt='show me' style={{width: '100px' , height: '100px'}}></img>
                        <p className='text-success m-2'><b>401[k] with Company watch</b></p>
                    </div>
                    <div className='m-1 mx-3 p-2' style={{width: '150px', height: '180px'}}>
                        <img src={Slippers} alt='show me' style={{width: '100px' , height: '100px'}}></img>
                        <p className='text-success m-2'><b>Medical and Health Test</b></p>
                    </div>
                    <div className='m-1 mx-3 p-2' style={{width: '150px', height: '180px'}}>
                        <img src={Education} alt='show me' style={{width: '100px' , height: '100px'}}></img>
                        <p className='text-success m-2'><b>Medical and Health Test</b></p>
                    </div>
                    <div className='m-1 mx-3 p-2' style={{width: '150px', height: '180px'}}>
                        <img src={Umbrella} alt='show me' style={{width: '100px' , height: '100px'}}></img>
                        <p className='text-success m-2'><b>Medical and Health Test</b></p>
                    </div>
                    <div className='m-1 mx-3 p-2' style={{width: '150px', height: '180px'}}>
                        <img src={Building} alt='show me' style={{width: '100px' , height: '100px'}}></img>
                        <p className='text-success m-2'><b>Medical and Health Test</b></p>
                    </div>
                </div>
                <div className='m-2 p-2'>
                    <p>Benefits are offered to eligible associates, subject to change and may differ by position and location</p>
                </div>
            </section>
            <section className='p-3'>
                <div className='mx-3'>
                    <h2 className='text-success'>Sales & Marketing</h2>
                </div>
                <div className='mx-5'>
                    <p>Market and sell your Beautiful crop under the dealership of Agrivive to get the most optimized returns among the farmers at the live market. Making the customers achieve the fullest Potential for the crops they harvest with Agrivive.</p>
                </div>
                <div className='mx-5'>
                    <button className='btn border border-success'>I'm Interested</button>
                </div>
            </section>
        </section>
    );
}

export default Careers;