import { useState } from "react";

function Nav({reset, search, sort, filter, types }) {

    const [filterValue, setFilterValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
    }

    const selectSort = e => {
        setSortValue(e.target.value);
        sort(e.target.value)
    }

    const handleSearchValue = e => {
        setSearchValue(e.target.value);
        search(e.target.value)
    }

    const resetHandler = () => {
        reset();
        setFilterValue('');
    }

    return (
        <div className="main_nav">
            <div className="Items_nav_filter">
                <span>Sort products by:</span>
                <select onChange={selectSort} value={sortValue}>
                    <option value="">Select sort type</option>
                    <option value="product_name_asc">By name - from A to Z</option>
                    <option value="product_name_desc">By name - from Z to A</option>
                    <option value="price_ascht_asc">By price from smallest</option>
                    <option value="price_desc">By price from biggest</option>
                </select>
            </div>
            <div className="Items_nav_filter">
                <span>Filter by product name</span>
                <select onChange={selectFilter} value={filterValue}>
                    <option value="">Select item</option>
                    {
                        types.map(t => <option key={t.product} value={t.product}>{t.product}</option>)
                    }
                </select>
            </div>
            <div className="Items_nav_filter">
                <span>Search by product name</span>
                <input onChange={handleSearchValue} value={searchValue}></input>
            </div>
            <div className="Items_nav_reset">
                <button onClick={resetHandler}>Reset items on list</button>
            </div>
        </div>

    )
}

export default Nav;