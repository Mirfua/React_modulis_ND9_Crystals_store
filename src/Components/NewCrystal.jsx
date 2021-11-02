import {useState} from "react";

function NewCrystal({create}) {

    const [inputs, setInputs] = useState({
        product: '',
        quantity: '',
        price: '',
        last_order: ''
    })

    const formControl = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    const handleCreate = () => {
        create(inputs);
        setInputs({
            product: '',
            quantity: '',
            price: '',
            last_order: ''
        });
    }

    return (
        <div className="jewelry__newItem">
            <h2>Add new crystal</h2>
            <div className="crystal__form__input">
                <span>Crystal name</span><input type="text" value={inputs.product} onChange={(e) => formControl(e, 'product')} />
            </div>
            <div className="crystal__form__input">
            <span>Quantity</span><input type="text" value={inputs.quantity} onChange={(e) => formControl(e, 'quantity')} />
            </div>
            <div className="crystal__form__input">
            <span>Crystal price</span><input type="text" value={inputs.price} onChange={(e) => formControl(e, 'price')} />
            </div>
            <div className="crystal__form__input">
            <span>Last order</span><input type="date" value={inputs.last_order} onChange={(e) => formControl(e, 'last_order')} />
            </div>
            <div className="crystal__form__input">
            <button onClick={handleCreate}>Add</button>
            </div>
        </div>
    )
}

export default NewCrystal;