import { usuarios, agregarUsuario, listarusuario } from "./usuarios.js"
import { libros, registrar_libro, listar_libros, listar_libros_disponibles, listar_libros_por_autor } from "./libros.js"
import { prestar_libro, devolver_libro } from "./prestamos.js"

agregarUsuario("Javier","javier.pulido@upb.edu.co")
listarusuario()
registrar_libro("El Principito","Antoine de Saint-Exupéry")
registrar_libro("Harry Potter","J. K. Rowling")
listar_libros()
listar_libros_disponibles()
listar_libros_por_autor("Antoine de Saint-Exupéry")
prestar_libro("El Principito")
listar_libros_disponibles()
devolver_libro("El Principito")
listar_libros_disponibles()


