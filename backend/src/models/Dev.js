const mongoose = require('mongoose');

//Aqui criamos o Schema com os dados do dev
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], 
});

module.exports = mongoose.model('Dev', DevSchema)