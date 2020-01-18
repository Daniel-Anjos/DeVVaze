const Dev = require('../models/Dev');

module.exports = {

    async index(request, response){
        //buscar todos os devs num raio de 10 kms
        //filtrar por tecnologias
        console.log(request.query);
        return response.json({ devs: []});

    }
}