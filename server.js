const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors()); //Como parametros pode se passar os dominios que terao acesso a requisicao e conf de seguranca


//Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodejs', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

// const Product = mongoose.model('Product');

//Usando Routes
app.use('/api', require('./src/routes'));

app.listen(8080);