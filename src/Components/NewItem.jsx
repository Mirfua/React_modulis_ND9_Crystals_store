import {useState} from "react";

function NewItem({create}) {

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
        <div className="newItem">
            <h2>Add new item to mine store ???</h2>
            <div className="crystal__form__input">
                <span>Item name</span><input type="text" value={inputs.product} onChange={(e) => formControl(e, 'product')} />
            </div>
            <div className="crystal__form__input">
            <span>Quantity</span><input type="text" value={inputs.quantity} onChange={(e) => formControl(e, 'quantity')} />
            </div>
            <div className="crystal__form__input">
            <span>Price</span><input type="text" value={inputs.price} onChange={(e) => formControl(e, 'price')} />
            </div>
            <div className="crystal__form__input">
            <span>Last order</span><input type="date" value={inputs.last_order} onChange={(e) => formControl(e, 'last_order')} />
            </div>
            <div className="crystal__form__input">
            <button onClick={handleCreate}>Add item</button>
            </div>
        </div>
    )
}

export default NewItem;