import express  from "express";
import { router } from "./routes.js";
import swaggerExpress from 'swagger-ui-express';
import yaml from 'yamljs';

import client from './repositories/databaseClients.js';

const swaggerDocs = yaml.load('./docs.yaml');

const app = express();

app.use(express.json());

app.get('/health', (request, response) =>{
    return response.send();
});

app.use(router);
app.use('/docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs));

app.listen(3000, () => {
    console.log('products service is running');  
client.authenticate()
    .then(( ) => { console.log('database connected') })
    .catch(error => { console.error(error)});
});