const swaggerAutogen = require('swagger-autogen')();

const outputFile = '../public/swagger_output.json';
const endpointsFiles = ['../app'];

const doc = {
    info: {
        version: "1.0.0",
        title: "PSICO TEST REST",
        description: "API REST for Psicology tests"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "",
            "description": ""
        }
    ],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",
            name: "Authorization",
            description: 'Enter your Bearer token in the format "Bearer {token}"'
        }
    },
    definitions: {
        /* contacto: {
            uuid: "f74660d8-1994-4e5d-96d3-e7ac7b852c97",
            nombres: "AUGUSTO NICOLÁS",
            apellidos: "SERVÍN PAPPALARDO",
            codarea: "0971",
            celular: "159904",
            correo: "augustoservin93@gmail.com",
            nacimiento: "1993-07-08",
            documento: "4678750",
            ciudad: "ASUNCIÓN",
            departamento: "CENTRAL",
            desafio: "",
            disponibilidad: "",
            dias: "",
            comentarios: ""
        }, */
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../app');
});