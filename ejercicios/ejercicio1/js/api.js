export async function obtenerImagen(fecha) {
  if (!fecha) {
    alert("Por favor, selecciona una fecha.");
    return;
  }

  const apiKey = "DEMO_KEY";
  const url = `https://api.nasa.gov/planetary/apod?date=${fecha}&api_key=${apiKey}`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log("Datos obtenidos:", datos);

    return datos;
  } catch (error) {
    console.error("Error al obtener la imagen:", error);
    alert("Hubo un problema al cargar la imagen. Inténtalo de nuevo.");
  }
}
