import { useEffect, useState } from "react";

function StoreModal({showModal, hide, crystal, edit, remove}) {
    const [inputs, setInputs] = useState({
        product: '',
        quantity: '',
        price: '',
        last_order: ''
    })

    useEffect(() => {
        setInputs({
            product: crystal.product,
            quantity: crystal.quantity,
            price: crystal.price,
            last_order: crystal.last_order.slice(0,10)
        })
    },[crystal])

    const handleEdit = () => {
        edit({
            product: inputs.product,
            quantity: inputs.quantity,
            price: inputs.price,
            last_order: inputs.last_order
        }, crystal.id)
    }

    const formControl = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }



    return (
        <div className="store__modal" style={{
            display: showModal ? 'flex' : 'none',
            top: window.scrollY + 100 + 'px'
            }}>
            <div className="store__form">
            <h2>Edit animal</h2>
            <div className="store__form__input">
                <span>Product name</span><input type="text" value={inputs.product} onChange={(e) => formControl(e, 'product')} />
            </div>
            <div className="store__form__input">
            <span>Quantity</span><input type="text" value={inputs.quantity} onChange={(e) => formControl(e, 'quantity')} />
            </div>
            <div className="store__form__input">
            <span>Price</span><input type="text" value={inputs.price} onChange={(e) => formControl(e, 'price')} />
            </div>
            <div className="store__form__input">
            <span>Last order</span><input type="date" value={inputs.last_order} onChange={(e) => formControl(e, 'last_order')} />
            </div>
            <div className="store__form__input__buttons">
            <button onClick={handleEdit}>Save</button>
            <button onClick={hide}>Cancel</button>
            <button onClick={() => remove(crystal.id)}>Delete</button>
            </div>
        </div>
        </div>
    )
}

export default StoreModal;