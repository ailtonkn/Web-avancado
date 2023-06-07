const Annotations = require('../models/AnnotationData');

module.exports = {
    async read(req, res) {
        try {
            const annotationList = await Annotations.find();
            return res.json(annotationList);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao buscar anotações' });
        }
    },

    async create(req, res) {
        try {
            const { titulo, notas, prioridade } = req.body;
            const annotation = await Annotations.create({
                titulo,
                notas,
                prioridade,
            });
            return res.status(201).json(annotation);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao criar anotação' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { titulo, notas, prioridade } = req.body;

            const annotation = await Annotations.findByIdAndUpdate(
                id, { titulo, notas, prioridade }, { new: true }
            );

            if (!annotation) {
                return res.status(404).json({ error: 'Anotação não encontrada' });
            }

            return res.json({ message: 'Anotação atualizada com sucesso', annotation });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao atualizar anotação' });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const annotation = await Annotations.findByIdAndDelete(id);
            if (!annotation) {
                return res.status(404).json({ error: 'Anotação não encontrada' });
            }
            return res.json({ message: 'Anotação deletada com sucesso' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao deletar anotação' });
        }
    },
};