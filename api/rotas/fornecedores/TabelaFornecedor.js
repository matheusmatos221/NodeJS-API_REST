const Modelo = require('./ModeloTabelaFornecedor')

module.exports = {
    listar () {
        return Modelo.findAll() // Método do sequelize
    },
    inserir(fornecedor) {
        return Modelo.create(fornecedor) // Método do sequelize
    },
    async pegarPorId(id) {
        const encontrado = await Modelo.findOne({
            where: {
                id: id
            }
        })

        if (!encontrado) {
            throw new Error('Fornecedor não encontrado')
        }

        return encontrado
    },
    atualizar(id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: {id: id}
            }
        )
    }
    
}