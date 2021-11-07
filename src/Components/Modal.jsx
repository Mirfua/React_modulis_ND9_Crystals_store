import { useEffect, useState } from "react";

function Modal({showModal, hide, modalElement, edit, remove}) {

    const [inputs, setInputs] = useState({
        product: '',
        quantity: '',
        price: '',
        last_order: ''
    })

    const control = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    useEffect(() => {
        setInputs({
            product: modalElement.product,
            quantity: modalElement.quantity,
            price: modalElement.price,
            last_order: modalElement.last_order.slice(0, 10)
        })
    }, [modalElement])

    const handleEdit = () => {
        edit({
            product: inputs.product,
            quantity: inputs.quantity,
            price: inputs.price,
            last_order: inputs.last_order
        }, modalElement.id)
    }


    return (
        <div className='modal' style={{ display: showModal ? 'flex' : 'none' }}>
            <div className='mystore'>
                <h2>Edit Crystal</h2>
                <div className='mystore__input'>
                    <span>Edit name: </span> <input type="text" value={inputs.product} onChange={(e) => control(e, 'product')} />
                </div>
                <div className='mystore__input'>
                    <span>Edit type: </span> <input type="text" value={inputs.quantity} onChange={(e) => control(e, 'quantity')} />
                </div>
                <div className='mystore__input'>
                    <span>Edit price: </span> <input type="text" value={inputs.price} onChange={(e) => control(e, 'price')} />
                </div>
                <div className='mystore__input'>
                    <span>Edit last order date: </span> <input type="date" value={inputs.last_order} onChange={(e) => control(e, 'last_order')} />
                </div>
                <button onClick={handleEdit}>Save</button>
                <button onClick={() => remove(modalElement.id)}>Delete</button>
                <button onClick={hide}>Cancel</button>
            </div>
        </div>

    );
}
export default Modal;