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
  
export function listar_libros_disponibles() {
    const disponibles = libros.filter(libro => libro.estado === "disponible");
    if (disponibles.length === 0) {
      console.log("No hay libros disponibles");
    } else {
      console.log("Libros disponibles:");
      disponibles.forEach((libro, index) => {
        console.log(`${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor}`);
      });
    }
  }

export function listar_libros_por_autor(autor) {
    const librosAutor = libros.filter(libro => libro.autor.toLowerCase() === autor.toLowerCase());
    if (librosAutor.length === 0) {
      console.log(`No hay libros de ${autor}.`);
    } else {
      console.log(`Libros de ${autor}:`);
      librosAutor.forEach((libro, index) => {
        console.log(`${index + 1}. Título: ${libro.titulo}, Estado: ${libro.estado}`);
      });
    }
  }
