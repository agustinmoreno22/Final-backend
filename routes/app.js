// app.js
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Configuración de express-handlebars
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('home'); // Asegúrate de tener un archivo 'home.handlebars' en la carpeta 'views'
});

const productRoutes = require('./routes/products');
app.use('/products', productRoutes);

const cartRoutes = require('./routes/carts');
app.use('/carts', cartRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
