import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://vanderleia:123456@account_db:27017');

async function getUsersCollection(client) {
    const database = client.db('accounts');
    const usersCollection = database.collection('users');
    return usersCollection;
}

export async function saveAccount(account) {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.insertOne(account);
    await client.close();
    
}