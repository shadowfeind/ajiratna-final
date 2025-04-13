import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const productVariationItem = pgTable("product_variation_items", {
  id: serial("id").primaryKey(),
  productId: varchar("product_id", { length: 255 }).notNull(),
  productVariationId: varchar("product_variation_id", {
    length: 255,
  }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  price: varchar("price", { length: 255 }).notNull(),
  stock: integer("stock").notNull(),
  image: varchar("image", { length: 255 }),
});

export type ProductVariationItem = typeof productVariationItem.$inferSelect;
export type NewProductVariationItem = typeof productVariationItem.$inferInsert;
