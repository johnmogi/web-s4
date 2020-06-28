const express = require('express');
const router = express.Router();
const cartLogic = require('../business-logic/cart-logic');
const sendError = require("../helpers/send-error");

//  get all items from user id (userid>cartid)  : localhost:3000/api/cart/user/:id (23)
router.get('/user/:id', async (request, response) => {
    const userId = +request.params.id
   
    try {
        const cart = await cartLogic.getUserCart(userId);
        response.status(200).json(cart);
    } catch (error) {
        sendError(response, error);
    }
});

// POST  localhost:3000/api/cart
router.post('/:userID', async (request, response) => {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const nowTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
const userID = +request.params.userID
    try {
        const cart = request.body;
        cart.cartTime = nowTime;
        cart.userID = userID;
        // cart.userId = request.body;
        const newCart = await cartLogic.addCart(cart);
        console.log(newCart)
        response.json(newCart);
    } catch (error) {
        sendError(response, error);
    }
});

router.get('/history/:cartID', async (request, response) => {
    const cart = +request.params.cartID;
    try {
        const oldCart = await cartLogic.historyCart(cart);
        response.json(oldCart);
    } catch (error) {
        sendError(response, error);
    }
});
router.delete('/drop', async (request, response) => {
    try {
        const cart = request.body;
    await cartLogic.deleteCart(cart);
    response.sendStatus(204);
    } catch (error) {
        sendError(response, error);
    }
});
router.delete('/drop/:id', async (request, response) => {
    try {
        const id = +request.params.id;

    await cartLogic.deleteItemFromCart(id);
    response.sendStatus(204);
    } catch (error) {
        sendError(response, error);
    }
});
module.exports = router;