import { relations } from "drizzle-orm";
import { products } from "./schema/products";
import { categories } from "./schema/categories";

export const productsRelations = relations(products, ({ many }) => ({
  categories: many(categories),
}));

export const categoryRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));
