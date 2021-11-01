import Jewelry from "./StoreCrystal";

function StoreList({jewelrys}) {

    return (
        <div className="jewelry__list">
            {jewelrys.map(crystal => <Jewelry key={crystal.id} crystal={crystal}></Jewelry>)}
        </div>
    )
}

export default StoreList;