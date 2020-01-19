//Aqui iremos transformar uma String em Array

module.exports = function parseStringAsArray (arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}