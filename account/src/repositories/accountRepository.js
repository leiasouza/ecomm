import { MongoClient } from 'mongodb';

async function databaseConnect() {
    const connectionURL = 'mongodb://vanderleia:123456@mongodb:27017';
    const connection = new MongoClient(connectionURL);
    await connection.connect();

    const database = connection.db('accounts');
    return database.collection('users');
}

    connection.close();

export async function saveAccount(accounts) {
    const collection = await databaseConnect();
    await collection.insertOne(accounts);
    
}
    