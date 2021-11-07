import axios from "axios";
import { useEffect, useState } from "react";
import NewItem from "./Components/NewItem";
import StoreList from "./Components/List";
import Modal from "./Components/Modal";
// import Nav from "./Components/Nav";


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


// SORT pridejimas

    // const [sortBy, setSortBy] = useState('');

    // useEffect(() => {
    //     if (sortBy) {
    //         setItems(Sort(items, sortBy, setFilterBy));
    //         // console.log(res.data);
    //     }
    // }, [sortBy])



// SEARCH pridejimas

    // const [searchBy, setSearchBy] = useState('');

    // useEffect(() => {
    //     if (searchBy) {
    //     axios.get('http://localhost:3003/item-search/?s='+searchBy)
    //         .then(res => {
    //             setItems(fixDate(res.data));
    //             // console.log(res.data);
    //         })
    //     }
    // }, [searchBy])



// FILTER pridejimas

    // const [filterBy, setFilterBy] = useState('');

    // useEffect(() => {
    //     if (filterBy) {
    //         axios.get('http://localhost:3003/stock-filter/'+filterBy)
    //         .then(res => {
    //             setItems(fixDate(res.data));
    //             // console.log(res.data);
    //         })
    //     }
    // }, [filterBy])

    // const reset = () => {
    //     setLastUpdate(Date.now());
    // }






// ALL RECORDS

    useEffect(() => {
        axios.get('http://localhost:3003/crystals')
        .then(res => {
            setCrystals(res.data);
            console.log(res.data);
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


// modal 

    const modal = (crystal) => {
        setShowModal(true);
        setModalElement(crystal);
    }

    const hide = () => {
        setShowModal(false);
    }


    return (
        <div className="crystals">
            <Modal showModal={showModal} hide={hide} modalElement={modalElement} edit={edit} remove={remove}></Modal>
            <div className="Nav">
                {/* <Nav  search={setSearchBy} filter={setFilterBy} sort={setSortBy} reset={reset}></Nav> */}
            </div>
            <StoreList crystals={crystals} modal={modal}></StoreList>
            <NewItem create={create}></NewItem>
        </div>
    )
}

export default App;