import jwt from 'jsonwebtoken';

export function generateToken (id) {
    const tokenSecret = process.env.TOKEN_SECRET;
    const tokenExpires = process.env.TOKEN_EXPIRATION;

    const token = jwt.sign({ userId: id}, tokenSecret, { expiresIn: `${tokenExpires}s` });
    return token;
}


// app.get('/user', (request, response) =>{
//     return response.json([{_id: 1, name: 'Alice'}]);

// });
// app.post('/login', async (request, response) => {
//     if(request.body.user === 'Alice'  && request.body.password === 'SenhaDaAlice') {
//        const token = jwt.sign({ _id: 1 }, compare, {expiresIn: 14400 });
//         return response.json(201);
//     }
//     response.status(400).end();
//     }); 