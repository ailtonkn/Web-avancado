const express = require('express');
require('./config/dbConfig');
const AnnotationController = require('./controllers/AnnotationController');
const routes = express.Router();

routes.use(express.json());

// Rotas para Anotações
routes.get('/annotations', AnnotationController.read);
routes.post('/annotations', AnnotationController.create);
routes.put('/annotations/:id', AnnotationController.update);
routes.delete('/annotations/:id', AnnotationController.delete);


module.exports = routes;