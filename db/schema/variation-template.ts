import { pgTable, serial, timestamp, varchar, text } from "drizzle-orm/pg-core";

export const variationTemplate = pgTable("variations", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  variation_items: text("variation_items").array(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
export type VariationTemplate = typeof variationTemplate.$inferSelect;
export type NewVariationTemplate = typeof variationTemplate.$inferInsert;
