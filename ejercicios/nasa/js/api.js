export async function obtenerImagen(fecha) {
  if (!fecha) {
    alert("Por favor, selecciona una fecha.");
    return;
  }

  const apiKey = "DEMO_KEY"; // Reemplázala con tu propia API Key si puedes
  const url = `https://api.nasa.gov/planetary/apod?date=${fecha}&api_key=${apiKey}`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log("Datos obtenidos:", datos); // Para depuración

    return datos; // Retornamos los datos en lugar de manipular el DOM aquí
  } catch (error) {
    console.error("Error al obtener la imagen:", error);
    alert("Hubo un problema al cargar la imagen. Inténtalo de nuevo.");
  }
}
