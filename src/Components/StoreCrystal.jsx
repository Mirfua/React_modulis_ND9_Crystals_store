
function StoreCrystal({crystal, modal}) {

    const showEdit = () => {
        modal(crystal)
    }

    return (
        <div className="oneCrystal">
            <div className="crystal_crystalList__product">
                <span><i>Item name: </i> {crystal.product}</span>    
            </div>
            <div className="crystal_crystalList__quantity">
                <span><i>Quantity: </i> {crystal.quantity}</span>    
            </div>
            <div className="crystal_crystalList__price">
                <span><i>Price: </i> {crystal.price} Eur</span>          
            </div>
            <div className="crystal_CrystalList__last_order">
                <span><i>Last order: </i> {crystal.last_order.slice(0, 10)}</span>    
            </div>
            <button onClick={showEdit}>Edit</button>
        </div>
    )
}

export default StoreCrystal;