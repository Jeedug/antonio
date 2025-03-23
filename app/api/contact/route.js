// Importar dependencias
import { NextResponse } from "next/server";
import { db } from "../../models/config"; // Importar la conexión a la base de datos
import { contactForm } from "../../models/schema"; // Importar el esquema

// Manejador POST para recibir datos del formulario.
export async function POST(request) {
  try {
    // Parsear el cuerpo de la solicitud (JSON)
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validar que todos los campos obligatorios estén presentes
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Insertar los datos en la base de datos
    const result = await db.insert(contactForm).values({
      name,
      email,
      phone, // Este campo puede ser null si no se proporciona
      message,
    });

    // Retornar una respuesta exitosa
    return NextResponse.json(
      { success: true, message: "Datos insertados correctamente", result },
      { status: 201 }
    );
  } catch (error) {
    // Capturar errores y retornar una respuesta de error
    console.error("Error al insertar datos:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
