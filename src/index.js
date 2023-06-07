const express = require('express');
const routes = require('./routes');
const app = express();
app.use(express.json());

app.get('/', function(req, res) {
    const mensagem =
        'Servidor Matrix rodando...<br><br>' +
        '<a href="http://localhost:3005/doc">Listar APIs</a>';
    res.send(mensagem);
});

require('./routes');


app.use(routes);

app.listen(3005, function() {
    console.log('Servidor rodando em http://localhost:3005');
});