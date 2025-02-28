// Importar los tipos necesarios de Drizzle
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// Definir la tabla contact_form
export const contactForm = sqliteTable("contact_form", {
  id: integer("id").primaryKey({ autoIncrement: true }), // ID autoincremental
  name: text("name").notNull(), // Nombre del usuario (no puede ser nulo)
  email: text("email").notNull(), // Correo electrónico (no puede ser nulo)
  phone: text("phone"), // Teléfono (opcional)
  message: text("message").notNull(), // Mensaje (no puede ser nulo)
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`) // Fecha y hora de creación (valor predeterminado: ahora)
    .notNull(), // No puede ser nulo
});