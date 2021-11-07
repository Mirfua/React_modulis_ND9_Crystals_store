import StoreCrystal from "./StoreCrystal";

function List({crystals, modal}) {

    return (
        <div className="main__list">
            <div className="welcome__tittle">  
            <h2>Welcome to mine small store ^_^</h2>
            </div>
            <div className="my__store">
                {crystals.map(crystal => <StoreCrystal key={crystal.id} crystal={crystal} modal={modal}></StoreCrystal>)}
            </div>   
        </div>
    )
}

export default List;