import { pgTable, serial, text, numeric, integer } from "drizzle-orm/pg-core";
import { users } from "./users";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  createdAt: text("created_at").default(new Date().toISOString()),
  userId: integer("user_id").references(() => users.id),
});

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
