import { relations } from "drizzle-orm";
import { products } from "./schemas/products";
import { users } from "./schemas/users";

export const usersRelations = relations(users, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one }) => ({
  user: one(users, {
    fields: [products.userId],
    references: [users.id],
  }),
}));
