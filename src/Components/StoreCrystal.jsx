
function StoreCrystal({crystal, modal}) {

    const showEdit = () => {
        modal(crystal)
    }

    return (
        <div className="main__list__item">
            <div className="main__list__item__name">
                <span><i>Item name: </i> {crystal.product}</span>    
            </div>
            <div className="main__list__item__quantity">
                <span><i>Quantity: </i> {crystal.quantity}</span>    
            </div>
            <div className="main__list__item__price">
                <span><i>Price: </i> {crystal.price} Eur</span>          
            </div>
            <div className="main__list__item__lastOrder">
                <span><i>Last order: </i> {crystal.last_order.slice(0, 10)}</span>    
            </div>
            <button onClick={showEdit}>Edit</button>
        </div>
    )
}

export default StoreCrystal;