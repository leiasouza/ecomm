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

// export async function listAccounts() {
//     const usersCollection = await databaseConnect();
//     const user = usersCollection.find().toArray();

//     return user;
// }

export async function findAccountByeEmail(email) {
    const usersCollection = await getUsersCollection(client);
    const user = await usersCollection.findOne({ email });
    await client.close();
    return user;
}

// export async function existsAccountById(id) {
//     const account = await findAccountById(id);

//     return account !== null;
// }