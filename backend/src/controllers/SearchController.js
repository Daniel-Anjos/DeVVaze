const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response){
        //buscar todos os devs num raio de 10 kms
        //filtrar por tecnologias
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            }, 
            location:{
                //operador que vai busar objetos que estejam próximo da localização
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            }
        });

        return response.json({ devs });

    }
}