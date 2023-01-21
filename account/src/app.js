import express  from "express";
import { router } from "./routes.js";
import jwt from 'jsonwebtoken'
import  compare from 'bcryptjs';


const app = express();

app.use(express.json());


app.get('/user', (request, response) =>{
    return response.json([{_id: 1, name: 'Alice'}]);

});
app.post('/login', async (request, response) => {
    if(request.body.user === 'Alice'  && request.body.password === 'SenhaDaAlice') {
       const token = jwt.sign({ _id: 1 }, compare, {expiresIn: 14400 });
        return response.json(201);
    }
    response.status(400).end();
    }); 

app.get('/health', (request, response) =>{
    return response.send();
});

app.use(router);

export {app};