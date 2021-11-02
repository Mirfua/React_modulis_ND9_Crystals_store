
function StoreCrystal({crystal, modal}) {

    const showEdit = () => {
        modal(crystal)
    }

    return (
        <div className="crystals__list__crystalList">
            <div className="crystal__list__crystalList__product">{crystal.product}</div>
            <div className="crystal__list__crystalList__quantity">{crystal.quantity}</div>
            <div className="crystal__list__crystalList__price">
                <span><i>Price:</i> {crystal.price} Eur</span>          
            </div>
            <div className="crystal__list__CrystalList__last_order">{crystal.last_order}</div>
            <button onClick={showEdit}>Edit</button>
        </div>
    )
}

export default StoreCrystal;