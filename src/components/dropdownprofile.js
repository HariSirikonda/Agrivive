import Settings from './images/settingsIcon.jpeg';
import Profile from './images/profile.jpeg';

function DropDownProfile(props){
    return(
        <>  
            <div className="dropDownProfile position-absolute top-100 end-0 p-3 rounded bg-white border text-start">
                <div className='position-relative d-flex border-bottom m-1 p-1 border'>
                    <div className='m-2 border'>
                        <img src={Profile} style={{width: '70px', height: '70px'}} className='img-fluid m-1 text-center'></img>
                    </div>
                    <div className='m-2 p-2 border'>
                        <p className='fs-5 m-1'>Firstname</p>
                        <p className='fs-6 m-1'>Last name</p>
                    </div>
                </div>
                <div className='d-flex border-bottom m-1 p-1'>
                    <img src={Settings} style={{width: '30px', height: '30px'}} className='img-fluid m-1'></img>
                    <p className='fs-5 m-1'>Profile</p><hr/>
                </div>
            </div>
        </>
    );
}

export default DropDownProfile;