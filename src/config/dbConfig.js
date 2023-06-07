const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/gerenciador-de-tarefas';
const dbConfig = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => console.log('Conectado ao MongoDB!'));
mongoose.connection.on('error', (error) => console.log('Erro: ' + error));

module.exports = dbConfig;