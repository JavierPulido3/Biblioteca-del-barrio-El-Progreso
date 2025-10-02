let libros = [];

function registrarLibro(titulo, autor, estado = "disponible") {
  const libro = {
    titulo,
    autor,
    estado
  };
  libros.push(libro);
  console.log(`Libro '${titulo}' se registro con éxito.`);
}
