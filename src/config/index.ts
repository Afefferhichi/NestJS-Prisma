import * as dotenv from 'dotenv';
dotenv.config();
console.log({ url: process.env.DB_CONNECT });

export const DB_CONNECT = process.env.DB_CONNECT || 'mongodb://localhost/nest'