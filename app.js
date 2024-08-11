const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const { MongoClient } = require('mongodb');

const app = express();

// Configurar el motor de plantillas Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Configurar conexión a MongoDB
const uri = "mongodb://tu-usuario:tu-contraseña@localhost:27017/tu-base-de-datos";
const client = new MongoClient(uri);

client.connect(err => {
    if (err) {
        console.error('Error conectando a MongoDB:', err);
    } else {
        console.log('Conexión exitosa a MongoDB');
    }
});

// Configurar rutas
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/products', (req, res) => {
    res.render('products', { title: 'Products Page' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
