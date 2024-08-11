const Cart = require('../models/cart');

const addProductToCart = async (req, res) => {
  // lógica para agregar producto al carrito
};

const removeProductFromCart = async (req, res) => {
  const { cid, pid } = req.params;
  try {
    const cart = await Cart.findById(cid);
    cart.products = cart.products.filter(p => p.product != pid);
    await cart.save();
    res.json({ status: 'success', message: 'Product removed' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

const updateCart = async (req, res) => {
  // lógica para actualizar carrito con un arreglo de productos
};

const updateProductQuantity = async (req, res) => {
  const { cid, pid } = req.params;
  const { quantity } = req.body;
  try {
    const cart = await Cart.findById(cid);
    const product = cart.products.find(p => p.product == pid);
    if (product) {
      product.quantity = quantity;
      await cart.save();
      res.json({ status: 'success', message: 'Product quantity updated' });
    } else {
      res.status(404).json({ status: 'error', message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

const clearCart = async (req, res) => {
  const { cid } = req.params;
  try {
    const cart = await Cart.findById(cid);
    cart.products = [];
    await cart.save();
    res.json({ status: 'success', message: 'Cart cleared' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

module.exports = {
  addProductToCart,
  removeProductFromCart,
  updateCart,
  updateProductQuantity,
  clearCart
};
