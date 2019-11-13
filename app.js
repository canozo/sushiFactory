require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');

const sushiRouter = require('./api/sushi');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  let mensaje = 'Pon /react o /angular al final de la URL para ver la pagina.<br>';
  mensaje += 'EJ: https://vanguardia-sushi-factory.herokuapp.com/react/';
  res.send(mensaje);
});

app.use(express.static('client-react/build'));
app.use(express.static('client-angular/dist/client-angular'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/sushi', sushiRouter);

app.get('/react/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client-react', 'build', 'index.html'));
});

app.get('/angular', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client-angular', 'dist', 'client-angular', 'index.html'));
});

app.get('/angular/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client-angular', 'dist', 'client-angular', 'index.html'));
});

server.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
