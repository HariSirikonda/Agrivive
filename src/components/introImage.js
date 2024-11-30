import Img3 from './images/planting.png';
import Tree from './images/treeImage.png';


function IntroImage(){
    return(
        <>
            <img src={Tree} alt='show me' className='fade-in'></img>
        </>
    );  
}

export default IntroImage;