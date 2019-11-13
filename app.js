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

app.use(express.static('client-react/build'));

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
  res.send('Angular Client');
});

app.get('/angular/*', (req, res) => {
  res.send('Angular Client');
});

server.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
