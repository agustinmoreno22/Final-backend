// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Obtiene todos los productos
    res.render('products', { products }); // Renderiza la vista 'products' con los productos
  } catch (err) {
    res.status(500).send('Error al obtener productos');
  }
});

module.exports = router;
