import StoreCrystal from "./StoreCrystal";

function StoreList({crystals, modal}) {

    return (
        <div className="crystals__list">
            <div className="my_store_welcome">  
            <h2>Welcome to mine litte crystal store :D</h2>
            </div>
            <div>
                {crystals.map(crystal => <StoreCrystal key={crystal.id} crystal={crystal} modal={modal}></StoreCrystal>)}
            </div>
            
        </div>
    )
}

export default StoreList;