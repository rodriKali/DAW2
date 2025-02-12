import { obtenerImagen } from "./api.js";

document.getElementById("btn-ver").addEventListener("click", async () => {
  const fecha = document.getElementById("fecha").value;
  const datos = await obtenerImagen(fecha);

  if (datos) {
    document.getElementById("titulo").textContent = datos.title;
    document.getElementById(
      "fecha-seleccionada"
    ).textContent = `Fecha: ${datos.date}`;
    document.getElementById("explicacion").textContent = datos.explanation;

    const mediaContainer = document.getElementById("media");
    mediaContainer.innerHTML = "";

    if (datos.media_type === "image") {
      mediaContainer.innerHTML = `<img src="${datos.url}" alt="Imagen de la NASA">`;
    } else if (datos.media_type === "video") {
      mediaContainer.innerHTML = `<iframe src="${datos.url}" frameborder="0" allowfullscreen></iframe>`;
    }
  }
});
