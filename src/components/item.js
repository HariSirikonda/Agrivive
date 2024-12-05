import Pot from './images/pot.png';
import Star from './images/star.png';

function Item(props){
    return(
        <>
            <div className="border border-success m-2" style={{width: '310px', height: '520px'}}>
                <div className="image-div rounded">
                    <img src={props.image} className="border m-1" alt="Show me" style={{width: '300px', height: '300px'}}></img>
                </div>
                <div className="item-info text-start">
                    <div className="p-2">
                        <p className="m-1"><b><mark className="rounded">Growing Zones</mark></b></p>
                        <p className="m-1">{props.name}</p>
                        <div className="d-flex">
                            <img className="mt-1" src={Star} style={{width: '18px', height: '18px'}}></img>
                            <img className="mt-1" src={Star} style={{width: '18px', height: '18px'}}></img>
                            <img className="mt-1" src={Star} style={{width: '18px', height: '18px'}}></img>
                            <img className="mt-1" src={Star} style={{width: '18px', height: '18px'}}></img>
                            <p className="m-1">208 Views</p>
                        </div>
                        <div>
                            <p className="m-1">Starting at <b>${props.cost}</b></p>
                            <p className="m-1 text-warning"><b>Upto {props.Off} OFF</b></p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center m-2"> 
                            <button className="btn w-50 mx-2 btn-success">Buy Now</button>
                            <button className="btn w-50 mx-2 btn-warning">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;