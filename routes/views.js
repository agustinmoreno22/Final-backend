const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');
const { getCart } = require('../controllers/cartController');

router.get('/products', async (req, res) => {
  try {
    const products = await getProducts(req, res);
    res.render('products', { products: products.payload });
  } catch (err) {
    res.status(500).send('Error al cargar los productos');
  }
});

router.get('/products/:pid', async (req, res) => {
  // Implementar la lógica para mostrar un producto específico
});

router.get('/carts/:cid', async (req, res) => {
  try {
    const cart = await getCart(req, res);
    res.render('cart', { cart });
  } catch (err) {
    res.status(500).send('Error al cargar el carrito');
  }
});

module.exports = router;
