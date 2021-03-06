import StoreCrystal from "./StoreCrystal";

function List({crystals, modal}) {

    return (
        <div className="main__list">
            <h2>All store items </h2>
            {crystals.map(crystal => <StoreCrystal key={crystal.id} crystal={crystal} modal={modal}></StoreCrystal>)}   
        </div>
    )
}

export default List;