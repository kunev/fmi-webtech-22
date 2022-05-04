const express = require("express");
const pokemonApiRouter = require("./api");
const viewsRouter = require('./views');

const app = express();
app.use(express.json());
app.set('view engine', 'pug');

app.use('/static', express.static('static'));
app.use('/api', pokemonApiRouter);
app.use('/', viewsRouter);

app.listen(3000);
