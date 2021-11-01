
function StoreCrystal({crystal}) {

    return (
        <div className="crytal__list">
            <div className="crystal__list__product">{crystal.product}</div>
            <div className="crystal__list__quantity">{crystal.quantity}</div>
            <div className="crystal__list__price">{crystal.price}</div>
            <div className="crystal__list__in_stock">{crystal.in_stock}</div>
            <div className="crystal__list__last_order">{crystal.last_order}</div>
        </div>
    )
}

export default StoreCrystal;