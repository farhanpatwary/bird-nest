import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  async connectToDB() {
    const config = {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      ssl: process.env.DB_SSL,
    };
    console.log(config);
    const pool = new Pool(config);
    try {
      const client = await pool.connect();
      const queryResponse = await client.query('select * from Users');
      console.log(queryResponse.rows);
    } catch (e) {
      console.log(e);
    }
  }
}
