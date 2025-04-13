import { relations } from "drizzle-orm";
import { product } from "./schema/product";
import { category } from "./schema/category";
import { productCategory } from "./schema/product-category";

export const productsRelations = relations(product, ({ many }) => ({
  productCategory: many(productCategory),
}));

export const categoryRelations = relations(category, ({ many }) => ({
  productCategory: many(productCategory),
}));

export const productCategoryRelations = relations(
  productCategory,
  ({ one }) => ({
    product: one(product, {
      fields: [productCategory.productId],
      references: [product.id],
    }),
    category: one(category, {
      fields: [productCategory.categoryId],
      references: [category.id],
    }),
  })
);
