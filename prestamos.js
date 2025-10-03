import { libros } from "./libros";

export function prestar_libro(titulo) {
  const libro = libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());

  if (libro) {
    if (libro.estado === "disponible") {
      libro.estado = "prestado";
      console.log(`El libro '${titulo}' ha sido prestado.`);
    } else {
      console.log(`El libro '${titulo}' no está disponible para ser prestado. Estado actual: ${libro.estado}`);
    }
  } else {
    console.log(`No se encontró un libro con el título '${titulo}'.`);
  }
}


export function devolver_libro(titulo) {
  const libro = libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());

  if (libro) {
    if (libro.estado === "prestado") {
      libro.estado = "disponible";
      console.log(`El libro '${titulo}' ha sido devuelto y ahora está disponible.`);
    } else {
      console.log(`El libro '${titulo}' no está prestado. Estado actual: ${libro.estado}`);
    }
  } else {
    console.log(`No se encontró un libro con el título '${titulo}'.`);
  }
}
