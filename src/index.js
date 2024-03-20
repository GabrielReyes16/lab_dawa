console.log("Hola mundo Tecsap")

//Importacioness
import express from "express"
import morgan from 'morgan'
import {  engine } from 'express-handlebars'
import { join, dirname } from 'path'
import { fileURLToPath } from "url"

//Inicializar
const app = express();

//Configurar carpetas para las vistas
const __dirname = dirname(fileURLToPath(import.meta.url));

//Configuraciones
app.set('port', process.env.PORT || 3000)

//Configurar carpeta para las vistas
app.set('views', join( __dirname, 'views'));

//Configurar el motor de plantillas
app.engine('.hbs', engine({
    defaultlayout : 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir : join(app.get('views'), 'partials'),
    extname : 'hbs'
}));

app.set('view engine', '.hbs');
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}))
app.use(express.json())

//Rutas
app.get('/', (req, res) => {
    res.render('index')
})

//Archivos publicos
app.use(express.static(join(__dirname, 'public')))
//Ejecutar servidor
app.listen(app.get('port'),()=>{
    console.log("Loading the port", app.get('port'))
})