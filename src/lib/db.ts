import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw Error('MONGODB_URI not found in environment variables')
}

let MONGODB_URI = process.env.MONGODB_URI as string
let client: MongoClient = new MongoClient(MONGODB_URI)
// let clientPromise: Promise<MongoClient> = client.connect()

export { client, /*clientPromise*/ };