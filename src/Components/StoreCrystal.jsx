
function StoreCrystal({crystal, modal}) {

    const showEdit = () => {
        modal(crystal)
    }

    return (
        <div className="crystals__list__crystalList">
            <div className="crystal__list__crystalList__product">
                <span><i>Item name: </i> {crystal.product}</span>    
            </div>
            <div className="crystal__list__crystalList__quantity">
                <span><i>Quantity: </i> {crystal.quantity}</span>    
            </div>
            <div className="crystal__list__crystalList__price">
                <span><i>Price: </i> {crystal.price} Eur</span>          
            </div>
            <div className="crystal__list__CrystalList__last_order">
                <span><i>Last order: </i> {crystal.last_order.slice(0, 10)}</span>    
            </div>
            <button onClick={showEdit}>Edit</button>
        </div>
    )
}

export default StoreCrystal;