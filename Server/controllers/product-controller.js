const express = require('express');
const router = express.Router();
const sendError = require("../helpers/send-error");

const productLogic = require('../business-logic/product-logic');
const fs = require('fs');

// get all products
router.get('/', async (request, response) => {
    try {
        const products = await productLogic.getAllProducts();
        response.json(products);
    } catch (error) {
        sendError(response, error);
    }
});
// get all cats http://localhost:3000/api/products/cats
router.get('/cats', async (request, response) => {
    try {
        const cats = await productLogic.getAllCats();
        response.json(cats);
    } catch (error) {
        sendError(response, error);
    }
});

router.post('/add-product', async (request, response) => {
    const item = request.body;
    try {
        const products = await productLogic.addProduct(item);
        response.json(products);
    } catch (error) {
        sendError(response, error);
    }
});

module.exports = router;