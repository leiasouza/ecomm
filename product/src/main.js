import express  from "express";
import { router } from "./routes.js";
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from "../api-docs.json" assert {type: "json"};
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (request, response) =>{
    return response.send();
});

app.use(router);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(3000, () => {
    console.log('products service is running');  
});