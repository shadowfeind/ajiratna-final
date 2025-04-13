import { relations } from "drizzle-orm";
import { product } from "./schema/product";
import { categorie } from "./schema/categorie";

export const productsRelations = relations(product, ({ many }) => ({
  categories: many(categorie),
}));

export const categoryRelations = relations(categorie, ({ many }) => ({
  products: many(product),
}));
