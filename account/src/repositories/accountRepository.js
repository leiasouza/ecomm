import { MongoClient } from 'mongodb';

export const client = new MongoClient(process.env.DATABASE_URL);

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

export async function listAccounts() {
    const userCollection = await databaseConnect();
    const accounts = userCollection.find().toArray();

    return accounts;
}

export async function findAccountById(id) {
    const userCollection = await databaseConnect();
    const account = userCollection.findOne({ _id: ObjectId(id) });
    return account;
}

export async function existsAccountById(id) {
    const account = await findAccountById(id);

    return account !== null;
}