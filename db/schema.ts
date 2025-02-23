import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const brands = pgTable("brands", {
    id: integer("id").primaryKey(),
    name: text("name").notNull().unique(),
    imageUrl: text("imageUrl"),
    published: boolean().notNull().default(false)
})