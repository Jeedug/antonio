import { db } from "../../models/config"; // Importar la conexión a la base de datos
import { contactForm } from "../../models/schema"; // Importar el esquema

// Manejador GET para obtener todos los contactos
export async function GET(request) {
  try {
    // Obtener todos los registros de la tabla contact_form
    const contacts = await db.select().from(contactForm);

    // Retornar los datos como respuesta JSON
    return new Response(JSON.stringify(contacts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Capturar errores y retornar una respuesta de error
    console.error("Error al obtener los contactos:", error);
    return new Response(
      JSON.stringify({ error: "Ocurrió un error al obtener los contactos." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
