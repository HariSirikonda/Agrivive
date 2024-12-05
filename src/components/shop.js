import Item from "./item";

function Shop() {
    return (
        <>
            <section className="container-fluid border">
                <div className="container-fluid align-items-center justify-content-center">
                    <h1 className="display-4 text-center text-success">Shop At Agrivive</h1>
                    <p>We have brought the most good looking home decorative plants here at Agrivive's Shoping</p>
                    <hr />
                </div>
                <div className="container border d-flex align-items-center justify-content-center p-3">
                    <Item name="Kwansen Tree" cost="124.95" Off="17%" />
                    <Item name="Dalicus Tree" cost="150.00" Off="10%" />
                    <Item name="Dalicus Tree" cost="150.00" Off="10%" />
                    <Item name="Dalicus Tree" cost="150.00" Off="10%" />
                </div>
            </section>
        </>
    );
}

export default Shop;