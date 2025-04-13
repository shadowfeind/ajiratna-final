import {
  pgTable,
  serial,
  text,
  numeric,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const product = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  crossedPrice: numeric("crossed_price", { precision: 10, scale: 2 }),
  images: text("images").array(),
  mainImage: text("main_image"),
  hoverImage: text("hover_image"),
  stock: integer("stock"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export type Product = typeof product.$inferSelect;
export type NewProduct = typeof product.$inferInsert;
