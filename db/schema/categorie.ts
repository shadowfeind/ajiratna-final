import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const categorie = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export type Categorie = typeof categorie.$inferSelect;
export type NewCategorie = typeof categorie.$inferInsert;
