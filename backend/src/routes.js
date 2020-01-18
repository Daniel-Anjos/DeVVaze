//Desta forma importamos apenas o método Router do express
const { Router } = require('express');
const routes = Router();

const SearchController = require('./controllers/SearchController')
const DevController = require('./controllers/DevController');

//get, post, put, delete

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

//Agora vamos exportar nossas rotas

module.exports = routes;