import axios from "axios";
import { useEffect, useState } from "react";
import NewItem from "./Components/NewItem";
import StoreList from "./Components/List";
import Modal from "./Components/Modal";
import Nav from "./Components/Nav";
import itemSort from "./Common/CrystalsSort";


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

// date formating

const dateOnly = (data) => {
    return data.map(a => {
        a.last_order = a.last_order.slice(0, 10);
        return a;
    });
}



// SORT pridejimas

    //const sortBy= useRef('');

    const [types, setTypes] = useState([])
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        if (sortBy) {
            setCrystals(itemSort(crystals, sortBy));
        }
    }, [sortBy])


    useEffect(() => {
        axios.get('http://localhost:3003/crystals')
            .then(res => {
                setCrystals(dateOnly(res.data));
                setTypes(res.data.filter(a => a.product))
            }).catch(err => console.log(err))
    }, [lastUpdate])


// SEARCH pridejimas

    const [searchBy, setSearchBy] = useState('');

    useEffect(() => {
        if (searchBy) {
        axios.get('http://localhost:3003/crystals-product/?s='+searchBy)
            .then(res => {
                setCrystals(dateOnly(res.data));
            }).catch(err => console.log(err))
        }
    }, [searchBy])


// FILTER pridejimas

    const [filterBy, setFilterBy] = useState('');

    useEffect(() => {
        if (filterBy) {
            axios.get('http://localhost:3003/crystals-filter/'+filterBy)
            .then(res => {
                setCrystals(dateOnly(res.data));
            })
        }
    }, [filterBy])

    const reset = () => {
        setLastUpdate(Date.now());
    }



// ALL RECORDS

    useEffect(() => {
        axios.get('http://localhost:3003/crystals')
        .then(res => {
            setCrystals(res.data);
            // console.log(res.data);
        })
    }, [lastUpdate])


// create RECORD

    const create = crystal => {
        axios.post('http://localhost:3003/crystals', crystal)
        .then(res => {
            setLastUpdate(Date.now())
            console.log(res.data);
        })
    }

// edit RECORD

    const edit = (crystal, id) => {
        setShowModal(false);
        axios.put('http://localhost:3003/crystals/' + id, crystal)
        .then(res => {
            setLastUpdate(Date.now())
            console.log(res.data);
        })
    }
    

// remove RECORD

    const remove = (id) => {
        setShowModal(false);
        axios.delete('http://localhost:3003/crystals/' + id)
        .then(res => {
            setLastUpdate(Date.now())
            console.log(res.data);
        })
    }


// modal  show/hide

    const modal = (crystal) => {
        setShowModal(true);
        setModalElement(crystal);
    }

    const hide = () => {
        setShowModal(false);
    }


    return (
        <div className="main">
            <Modal showModal={showModal} hide={hide} modalElement={modalElement} edit={edit} remove={remove}></Modal>
            <Nav types={types} search={setSearchBy} filter={setFilterBy} sort={setSortBy} reset={reset}></Nav>
            <StoreList crystals={crystals} modal={modal}></StoreList>
            <NewItem create={create}></NewItem>
        </div>
    )
}

export default App;