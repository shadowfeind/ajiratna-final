import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { product } from "./product";

export const productVariation = pgTable("product_variations", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").references(() => product.id),
  title: varchar("title", { length: 255 }).notNull(),
});

export type ProductVariation = typeof productVariation.$inferSelect;
export type NewProductVariation = typeof productVariation.$inferInsert;
