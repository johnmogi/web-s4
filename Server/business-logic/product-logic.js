const dal = require("../data-access-layer/dal");

async function getAllProducts() {
    const sql = `SELECT * FROM products`;
    const products = await dal.executeAsync(sql);
    return products;
}
async function getAllCats() {
    const sql = `SELECT * FROM categories`;
    const cats = await dal.executeAsync(sql);
    return cats;
}


// async function addProduct(item) {
//     const sql = 'INSERT INTO products VALUES(DEFAULT, ?, ?, ?, ?, ?)'
//     const addedProduct = await dal.executeAsync(sql, [item.itemName, item.price, item.imageUrl, item.itemDescription, item.catID]);
//     return addedProduct;
// }

module.exports = {
    getAllProducts,
    getAllCats,
    // addProduct
    // searchProduct
}

// const sql = `SELECT vacationID,description, destination, picFileName, DATE_FORMAT(startDate, "%m/%d/%Y") as startDate, DATE_FORMAT(endDate, "%m/%d/%Y") as endDate, price FROM vacations`;
