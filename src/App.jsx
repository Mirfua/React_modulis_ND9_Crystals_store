import axios from "axios";
import { useEffect, useState } from "react";
import NewCrystal from "./Components/NewCrystal";
import StoreList from "./Components/StoreList";
import StoreModal from "./Components/StoreModal";


function App() {

    const [crystals, setCrystals] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [showModal, setShowModal] = useState(false);
    const [modalElement, setModalElement] = useState({

        product: '',
        quantity: '',
        price: '',
        last_order: ''
    })

    useEffect(() => {
        axios.get('http://localhost:3003/crystals')
        .then(res => {
            setCrystals(res.data);
            console.log(res.data);
        })
    }, [lastUpdate])

    const create = crystal => {
        axios.post('http://localhost:3003/crystals', crystal)
        .then(res => {
            setLastUpdate(Date.now())
            console.log(res.data);
        })
    }
    const modal = (crystal) => {
        setShowModal(true);
        setModalElement(crystal);
    }
    
    const hide = () => {
        setShowModal(false);
    }
    const edit = (crystal, id) => {
        setShowModal(false);
        axios.put('http://localhost:3003/crystals/' + id, crystal)
        .then(res => {
            setLastUpdate(Date.now())
            console.log(res.data);
        })
      }
    
      const remove = (id) => {
        setShowModal(false);
        axios.delete('http://localhost:3003/crystals/' + id)
        .then(res => {
            setLastUpdate(Date.now())
            console.log(res.data);
        })
      }

    return (
        <div className="crystals">
            <StoreModal showModal={showModal} hide={hide} modalElement={modalElement} edit={edit} remove={remove}></StoreModal>
            <StoreList crystals={crystals} modal={modal}></StoreList>
            <NewCrystal create={create}></NewCrystal>
        </div>
    )
}

export default App;