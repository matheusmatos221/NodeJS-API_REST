const Modelo = require('./ModeloTabelaFornecedor')

module.exports = {
    listar () {
        return Modelo.findAll() // Método do sequelize
    },
    inserir(fornecedor) {
        return Modelo.create(fornecedor) // Método do sequelize
    }
    
}