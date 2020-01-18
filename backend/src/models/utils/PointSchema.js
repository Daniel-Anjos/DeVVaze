const mongoose = require ('mongoose');

const PointSchema = new mongoose.Schema({
    //Detalhes sobre o schema para localização retirados da documentação do mongoDB
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

module.exports = PointSchema;