const express = require('express');

const routes = express.Router();

const ProductController = require('./controller/ProductController');


//Primeira Rota
routes.get("/products", ProductController.indexed);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;
