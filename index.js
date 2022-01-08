import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({path:"variables.env"});

const app = express()

// conectar la base de datos
db.authenticate()
    .then( () => console.log('base de datos conectada'))
    .catch( error => console.log(error));

// Habilitar Pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencias de Viajes';
    next();
})

// Agregar bodyparser para leer los datos de los formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);
 
app.listen( () => {
    console.log(`Escuchando desde el puerto ${ port }`);
});

// Puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000
app.listen(port, host, () => {
    console.log('Servidor funcionando');
});