const mongoose = require('mongoose');
const Products = mongoose.model('Product');

module.exports = {
    async indexed(req, res) { //No objeto vazio, seria colocado as condicoes de query ao DB

        const { page = 1 } = req.query; //Query para parametros get
        const products = await Products.paginate({}, { page, limit: 10 });

        return res.json(products);
    },
    async store(req, res) {
        //Criacao de Registro
        const products = await Products.create(req.body);

        return res.json(products);
    },
    async show(req, res) {
        //Listagem de um produto pelo id
        const products = await Products.findById(req.params.id);

        return res.json(products);
    },
    async update(req, res) {
        const products = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(products);
    },
    async delete(req, res) {
        await Products.findByIdAndRemove(req.params.id);

        return res.send();
    }
}


