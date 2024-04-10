const db = require('./database');
const Sequelize = db.Sequelize;

const Clientes = db.sequelize.define('clientes', {
    nome: {
        type: Sequelize.STRING,
    },

    endereco: {
        type: Sequelize.STRING,
    },
    bairro: {
        type: Sequelize.STRING,
    },
    cep: {
        type: Sequelize.STRING,
    },
    cidade: {
        type: Sequelize.STRING,
    },
    estado: {
        type: Sequelize.STRING,
    },
})

//Clientes.sync({force: true})

module.exports = Clientes;