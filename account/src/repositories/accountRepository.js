import { MongoClient } from 'mongodb';

export const client = new MongoClient('mongodb://vanderleia:123456@localhost:27017');

export async function getUsersCollection(client) {
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