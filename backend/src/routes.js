//Desta forma importamos apenas o método Router do express
const { Router } = require('express');
const routes = Router();

const axios = require('axios');

//get, post, put, delete

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login , avatar_url, bio } = apiResponse.data;
    
    const techsArray = techs.splt(',').map(tech => tech.trim());


    //console.log( name, avatar_url, bio, github_username);

    return response.json({ message: 'Hello Daniel'});
});

//Agora vamos exportar nossas rotas

module.exports = routes;