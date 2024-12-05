import Item from "./item";
import Pot from './images/pot.png';
import Item1 from './images/1_Item.png';
import Item2 from './images/2_Item.png';
import Item3 from './images/3_Item.png';
import Item4 from './images/4_Item.png';
import Item5 from './images/5_Item.png';
import Item6 from './images/6_Item.png';

const Shop = () => {
    return (
        <>
            <section className="container-fluid border">
                <div className="container-fluid align-items-center justify-content-center">
                    <h1 className="display-4 text-center text-success">Shop At Agrivive</h1>
                    <p>We have brought the most good looking home decorative plants here at Agrivive's Shoping</p>
                    <hr />
                </div>
                <div className="container border">
                    <div className="d-flex align-items-center justify-content-center">
                        <Item image={Item1} name="Kwansen Tree" cost="124.95" Off="17%" />
                        <Item image={Item2} name="Kwansen Tree" cost="124.95" Off="17%" />
                        <Item image={Item3} name="Kwansen Tree" cost="124.95" Off="17%" />
                        <Item image={Item4} name="Kwansen Tree" cost="124.95" Off="17%" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Item image={Item5} name="Kwansen Tree" cost="124.95" Off="17%" />
                        <Item image={Item6} name="Kwansen Tree" cost="124.95" Off="17%" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shop;