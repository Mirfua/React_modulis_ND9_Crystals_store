import StoreCrystal from "./StoreCrystal";

function List({crystals, modal}) {

    return (
        <div className="all_crystals_list">
            <div className="my_store_welcome_tittle">  
            <h2>Welcome to mine small store ^_^</h2>
            </div>
            <div className="my_store_map">
                {crystals.map(crystal => <StoreCrystal key={crystal.id} crystal={crystal} modal={modal}></StoreCrystal>)}
            </div>   
        </div>
    )
}

export default List;