import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { category } from "./category";
import { product } from "./product";

export const productCategory = pgTable(
  "product_category",
  {
    productId: integer("product_id")
      .references(() => product.id)
      .notNull(),
    categoryId: integer("category_id")
      .references(() => category.id)
      .notNull(),
  },
  (t) => [primaryKey({ columns: [t.productId, t.categoryId] })]
);
