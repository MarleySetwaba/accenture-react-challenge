import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

//brands schema definition
export const brands = pgTable("brands", {
    id: integer("id").primaryKey(),
    name: text("name").notNull().unique(),
    imageUrl: text("imageUrl"),
    published: boolean().notNull().default(false)
})