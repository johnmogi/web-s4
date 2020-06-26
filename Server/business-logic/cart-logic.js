const dal = require("../data-access-layer/dal");

// new cart
// DATE_FORMAT(cartTime, "%m/%d/%Y") as cartTime
async function addCart(cart) {
    const sql = `INSERT INTO cart VALUES (DEFAULT,  ?, ?)`;
    const newCart = await dal.executeAsync(sql, [cart.userID, cart.cartTime]);
    return newCart;
}
//find cart by user
async function getUserCart(userID) {
    const getCart = `SELECT * FROM cart WHERE userID = ${userID}`;
    const userCart = await dal.executeAsync(getCart)

    //  const cart = +userCart[0].cartID;
    //  const getCartItemsFromCart = `SELECT * FROM cartItem WHERE cartID = ${cart} `;
    //  const oldItems = await dal.executeAsync(getCartItemsFromCart);
    //  console.log(oldItems, userCart[0]);
    return (userCart);
}

//old cart - get old items from cart
async function historyCart(cartID) {
    const sql = `SELECT * FROM cartItem WHERE cartID = ? `;
    const oldCart = await dal.executeAsync(sql, [cartID]);
    return oldCart;
}
// maybe convert this validation to update instead?
async function verifyDuplicate(product) {
    const sql = `SELECT * FROM cartItem WHERE cartID = ? AND productID = ?`;
    const getCart = await dal.executeAsync(sql, [product.cartID, product.productID]);
    return getCart;
}
// INSERT INTO `cartItem` (`itemID`, `productID`, `amount`, `totalPrice`, `cartID`) VALUES (NULL, '4', '1', '2500', '1');

async function addProductToCartItem(cart) {
    const sql = `INSERT INTO cartItem VALUES (DEFAULT, ?, ?, ?, ?)`;
    const newCart = await dal.executeAsync(sql, [cart.productID, cart.amount, cart.totalPrice, cart.cartID]);
    return newCart;
}
async function deleteCart(cart) {
    const sql = `DELETE FROM cartItem WHERE cartID = ${cart.cartID}`;
    const newCart = await dal.executeAsync(sql);
    return newCart;
}
async function deleteItemFromCart(id) {
    const sql = `DELETE FROM cartItem WHERE productID = ${id}`;
    const newCart = await dal.executeAsync(sql);
    return newCart;
}




module.exports = {
    addCart,
    getUserCart,
    historyCart,
    verifyDuplicate,
    addProductToCartItem,
    deleteCart,
    deleteItemFromCart
}