import { client } from "@/lib/db"
import { Collection } from "mongodb";

interface IRepository<T> {
    find(
        filter: Partial<T>,
        page: number,
        limit: number,
        projection?: Partial<Record<keyof T, 1 | 0>>,
    ): Promise<{ data: T[], totalCount: number }>
}

export class Repository<T> implements IRepository<T> {
  private collection: string;
  private database: string | undefined;

  constructor(collection: string, database? : string) {
    this.collection = collection;
    this.database = database;
  }

  async find(
    filter: any,
    page: number = 1,
    limit: number = 10,
    projection?: Partial<Record<keyof T, 1 | 0>>,
  ): Promise<{ data: T[], totalCount: number }> {
    try {
        // const client: MongoClient = await clientPromise;
  
      const skip = (page - 1) * limit;
      const collection = client.db(this.database).collection(this.collection);
      const totalCount = await collection.countDocuments(filter);
      const data = await collection
        .find(filter, { projection })
        .skip(skip)
        .limit(limit)
        .toArray();
  
      return { data: data as unknown as T[], totalCount };
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes("ECONNREFUSED")) {
          console.error("Failed to connect to MongoDB. Connection refused.");
        } else {
          console.error("An error occurred:", error.message);
        }
      }
      return { data: [], totalCount: 0 };
    }
  }
}