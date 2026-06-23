import {Pool} from "pg";
import "dotenv/config"
import { Kysely, PostgresDialect } from "kysely";
import { Database } from "./schema";

const pool = new Pool({
  connectionString:process.env.DATABASE_URL
})

const dialect = new PostgresDialect({
  pool,
})

export const db = new Kysely<Database>({
 dialect
});


