import { pgTable, serial, text, numeric, timestamp } from "drizzle-orm/pg-core";

export const product = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  images: text("images").array(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export type Product = typeof product.$inferSelect;
export type NewProduct = typeof product.$inferInsert;
