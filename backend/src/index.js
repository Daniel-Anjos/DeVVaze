const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');

const app = express();

//String de conexão gerada no mongo atlas
mongoose.connect('mongodb+srv://oministack:oministack@cluster0-pcu9q.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

app.use(express.json());
app.use(routes);

app.listen(3333);