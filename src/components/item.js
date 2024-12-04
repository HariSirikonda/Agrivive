import Pot from './images/pot.png';
import Star from './images/star.png';
function Item() {
    return(
        <>
            <div className="border border-success" style={{width: '350px', height: '510px'}}>
                <div className="image-div rounded">
                    <img src={Pot} className="border m-1" alt="Show me" style={{width: '340px', height: '340px'}}></img>
                </div>
                <div className="item-info text-start">
                    <div className="p-2">
                        <p className="m-1"><b><mark className="rounded">Growing Zones</mark></b></p>
                        <p className="m-1">Kwansen Tree</p>
                        <div className="d-flex">
                            <img className="mt-1" src={Star} style={{width: '18px', height: '18px'}}></img>
                            <img className="mt-1" src={Star} style={{width: '18px', height: '18px'}}></img>
                            <img className="mt-1" src={Star} style={{width: '18px', height: '18px'}}></img>
                            <img className="mt-1" src={Star} style={{width: '18px', height: '18px'}}></img>
                            <p className="m-1">208 Views</p>
                        </div>
                        <div>
                            <p className="m-1">Starting at <b>$124.95</b></p>
                            <p className="m-1 text-warning"><b>Upto 17% OFF</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;