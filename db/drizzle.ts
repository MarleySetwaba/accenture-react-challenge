import {config} from 'dotenv'
import { drizzle } from 'drizzle-orm/neon-http';

//configure drizzle to point to env for environment variables
config({path: ".env"})

//instantiate database connection
export const db = drizzle(process.env.DATABASE_URL!);
