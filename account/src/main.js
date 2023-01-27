import yamljs from 'yamljs';
import swaggerExpress from 'swagger-ui-express';
import { app } from './app.js';

const swaggerDocs = yamljs.load('./docs.yaml');

app.use('/docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs))

app.listen(process.env.SERVER_PORT, () => {
    console.log('accounts service is running');
});
