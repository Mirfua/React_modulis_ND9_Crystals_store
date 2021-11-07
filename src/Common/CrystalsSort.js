function itemSort(allItems, by) {
    let crystals = allItems.slice();
    switch (by) {
        case 'product_name_asc':
            crystals.sort((a, b) => {
                const nameA = a.product.toUpperCase();
                const nameB = b.product.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            break;
        case 'product_name_desc':
            crystals.sort((a, b) => {
                const nameA = a.product.toUpperCase();
                const nameB = b.product.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'price_asc':
            crystals.sort(function(a, b) {
                return a.price - b.price;
            });
            break;
        case 'price_desc':
            crystals.sort(function(a, b) {
                return b.price - a.price;
            });
            break;
        default:
    }
    return crystals
}
export default itemSort;