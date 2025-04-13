import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const category = pgTable("categorys", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export type Category = typeof category.$inferSelect;
export type NewCategory = typeof category.$inferInsert;
