import Item from "./item";

function Shop(){
    return (
        <>
            <section className="container-fluid border p-5">
                <div className="container border p-2 d-flex align-items-center justify-content-center p-5">
                    <Item/>
                </div>
            </section>
        </>
    );
}

export default Shop;