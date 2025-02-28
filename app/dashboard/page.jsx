import { db } from "../models/config"; // Importar la conexión a la base de datos
import { contactForm } from "../models/schema"; // Importar el esquema

export default async function Page() {
  // Obtener todos los registros de la tabla contact_form
  const contacts = await db.select().from(contactForm);

  return (
    <div className="p-8 h-screen">
      <h1 className="text-2xl font-bold mb-6">Registros de Contacto</h1>

      {/* Tabla para mostrar los registros */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Correo Electrónico</th>
            <th className="py-2 px-4 border-b">Teléfono</th>
            <th className="py-2 px-4 border-b">Mensaje</th>
            <th className="py-2 px-4 border-b">Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="border-b">
              <td className="py-2 px-4 text-center">{contact.id}</td>
              <td className="py-2 px-4">{contact.name}</td>
              <td className="py-2 px-4">{contact.email}</td>
              <td className="py-2 px-4">{contact.phone || "N/A"}</td>
              <td className="py-2 px-4">{contact.message}</td>
              <td className="py-2 px-4 text-center">{new Date(contact.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mensaje si no hay registros */}
      {contacts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No hay registros disponibles.</p>
      )}
    </div>
  );
}