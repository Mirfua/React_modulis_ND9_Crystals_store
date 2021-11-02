function CrystalStore({crystal, modal}) {

    const showEdit = () => {
        modal(crystal)
    }

    return (
        <div className='CrystalsStore'>
            <div>
                <span>Product Name: </span>
                <div>{crystal.product}</div>
            </div>
            <div>
                <span>type: </span>
                <div>{crystal.quantity}</div>
            </div>
            <div>
                <span>Price: </span>
                <div>{crystal.price}</div>
            </div>
            <div>
                <span>Last order date: </span>
                <div>{crystal.last_order.slice(0, 10)}</div>
            </div>
            <button onClick={showEdit}>Edit</button>
        </div>
    )
}

export default CrystalStore;