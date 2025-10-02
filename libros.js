export const libros = [];

export function registrar_libro(titulo, autor, estado = "disponible") {
  const libro = {
    titulo,
    autor,
    estado
  };
  libros.push(libro);
  console.log(`Libro '${titulo}' se registro con éxito.`);
}

export function listar_libros() {
    if (libros.length === 0) {
      console.log("No hay libros registrados");
    } else {
      console.log("Lista de libros:");
      libros.forEach((libro, index) => {
        console.log(`${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor}, Estado: ${libro.estado}`);
      });
    }
  }
  