import axios from "axios";
import { useEffect, useState } from "react";
import StoreList from "./Components/StoreList";
import StoreModal from "./Components/StoreModal";
import NewCrystal from "./Components/NewCrystal";

function App() {

    const [crystals, setCrystals] = useState([]);

    const [lastUpdate, setLastUpdate] = useState(Date.now())

    const [showModal, setShowModal] = useState(false)

    const [modalCrystal, setModalCrystal] = useState({
        product: '',
        quantity: '',
        price: '',
        last_order: ''
    })


    useEffect(() => {
        axios.get('http://localhost:3003/animals')
            .then(res => {
                setCrystals(res.data);
                console.log(res.data);
            })
    }, [lastUpdate])

    const create = newCrystal => {
        axios.post('http://localhost:3003/animals', newCrystal)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
    }

    const edit = (newCrystal, id) => {
        setShowModal(false);
        axios.put('http://localhost:3003/animals/'+id, newCrystal)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
    }

    const remove = (id) => {
        setShowModal(false);
        axios.delete('http://localhost:3003/animals/'+id)
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
    }


    const modal = (newCrystal) => {
        setShowModal(true);
        setModalCrystal(newCrystal);
    }

    const hide = () => {
        setShowModal(false);
    }

    return (
        <div className="Crystal">
            <NewCrystal create={create}></NewCrystal>
            <StoreList crystals={crystals} modal={modal}></StoreList>
            <StoreModal edit={edit} remove={remove} hide={hide} newCrystal={modalCrystal} showModal={showModal}></StoreModal>
        </div>
    )
}

export default App;