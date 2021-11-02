import Jewelry from "./StoreCrystal";

function StoreList({crystals, modal}) {

    return (
        <div className="jewelry__list">
            {crystals.map(crystal => <Jewelry key={crystal.id} crystal={crystal} modal={modal}></Jewelry>)}
        </div>
    )
}

export default StoreList;