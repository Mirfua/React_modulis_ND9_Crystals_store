
function StoreCrystal({crystal, modal}) {

    const showEdit = () => {
        modal(crystal)
    }

    return (
        <div className="oneCrystal">
            <div className="item_stats">
                <span><i>Item name: </i> {crystal.product}</span>    
            </div>
            <div className="item_stats">
                <span><i>Quantity: </i> {crystal.quantity}</span>    
            </div>
            <div className="item_stats">
                <span><i>Price: </i> {crystal.price} Eur</span>          
            </div>
            <div className="item_stats">
                <span><i>Last order: </i> {crystal.last_order.slice(0, 10)}</span>    
            </div>
            <button onClick={showEdit}>Edit</button>
        </div>
    )
}

export default StoreCrystal;