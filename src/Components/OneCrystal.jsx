import { useState } from "react";


function OneCrystal({ mystore, goBack, addPrice }) {

    const [price, setPrice] = useState('');

    const handlePrice = e => {
        setPrice(e.target.value);
    }

    const submitPrice = () => {
        addPrice(mystore.id, price)
        setPrice('');
    }
    return (
        <>
            <h2>No.:{mystore.id} Price: {mystore.price}</h2>
            <input type="text" onChange={handlePrice} value={price} />
            <button onClick={submitPrice}>set Price</button>
            <button onClick={() => goBack(mystore.id)}>Remove</button>
        </>
    );
}




export default OneCrystal;