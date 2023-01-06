import { Sequelize } from 'sequelize';

const client = new Sequelize('mysql://vanderleia:23456@product_db:3306/products');

export default client;
