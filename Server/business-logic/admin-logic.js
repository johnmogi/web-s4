const dal = require("../data-access-layer/dal");

// INSERT INTO `products` (`productID`, `itemName`, `price`, `imageUrl`, `itemDescription`, `catID`) VALUES (NULL, 'elementor portfolio minisite', '3500', 'portfolio.jpg', 'The wordpress elementor is an excellent design system, enjoy', '4');

async function addProduct(item) {
    const sql = 'INSERT INTO products VALUES(DEFAULT, ?, ?, ?, ?, ?)'
    const addedProduct = await dal.executeAsync(sql, [item.itemName, item.price, item.imageUrl, item.itemDescription, item.catID]);
    return addedProduct;
}

// async function insertProduct(product) {
//     const sql = `INSERT INTO products (itemName, price, imageUrl, itemDescription, catID) VALUES ('${product.itemName}', ${product.price}, '${product.imageUrl}' '${product.itemDescription}', ${product.catID})`;
//     // const sql = `INSERT INTO products VALUES (DEFAULT, ?, ?, ?, ?,?)`;
//     const products = await dal.executeAsync(sql);
//     console.log(products)
//         // const products = await dal.executeAsync(sql, [product.catID, product.imageUrl, 
//         //     product.itemDescription, product.itemName, product.price]);
//     return products; 
// //     return Category.find({}).exec();
// }

module.exports = {
    addProduct
    // addProduct,
    // getAllCategories
}

// "catID": "4",
// "imageUrl": "primadance.jpg",
// "itemDescription": "there is a fine line between failure and success, this project had failure written all over it, but I managed to pull up my team and structure it to the finish line, despite the difficuties",
// "itemName": "Primadance- WooCommerce site",
// "price": 7500