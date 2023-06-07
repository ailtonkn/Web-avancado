const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnotationSchema = new Schema({
    titulo: String,
    notas: String,
    prioridade: Boolean,

});

module.exports = mongoose.model('Annotation', AnnotationSchema);