# Carlos Eduardo Buitrago Vargas - 000588710
# Javier Gustavo Pulido Rincón - 000588368
# Manuel Rolando Santos Uribe - 000591072

# Biblioteca - Gestión de Usuarios, Libros y Préstamos

## Descripción

Este proyecto es un sistema de gestión para una biblioteca. Permite registrar usuarios, registrar libros y realizar préstamos de libros a los usuarios. Además, los administradores pueden consultar el estado de los libros (si están disponibles o prestados), filtrar libros por autor, y gestionar las devoluciones de libros.
El programa está diseñado para funcionar de manera sencilla en consola utilizando JavaScript puro, sin interfaz gráfica, y organizado en diferentes módulos para facilitar la sostenibilidad y organizamiento del código.

## Funcionalidades

El sistema permite realizar las siguientes acciones:

-Usuarios

Registrar nuevos usuarios con nombre y correo electrónico.
Consultar información de los usuarios registrados.

-Libros

Registrar nuevos libros con título, autor y estado (disponible o prestado).
Listar todos los libros registrados.
Filtrar libros por autor.
Listar solo los libros disponibles.

-Préstamos

Prestar un libro solo si está disponible.
Devolver un libro, cambiando su estado a "disponible".

## Estructura del Proyecto

El proyecto está dividido en diferentes módulos para organizar mejor el código y facilitar el trabajo en equipo:

usuarios.js: Contiene las funciones para manejar la información de los usuarios.
libros.js: Contiene las funciones para manejar los libros y realizar los filtros.
prestamos.js: Contiene las funciones para gestionar los préstamos y devoluciones de libros.
main.js: Es el archivo principal que coordina todo el flujo de trabajo y ejecuta las funciones desde los módulos anteriores.

## Instalación y Ejecución

-Clonar el repositorio:

git clone (URL del repositorio)
cd nombre_del_repositorio

-Ejecutar el programa:
El programa se ejecuta desde la consola utilizando Node.js. Para iniciar el programa, ejecuta el siguiente comando:

node main.js

## Trabajo en Equipo

Este proyecto fue desarrollado en equipo utilizando Git y GitHub para la colaboración. Cada miembro del equipo se encargó de un módulo específico:

Persona 1: Gestión de usuarios (archivo usuarios.js).

Persona 2: Gestión de libros y filtros (archivo libros.js).

Persona 3: Gestión de préstamos y devoluciones (archivo prestamos.js).

Cada miembro trabajó en su propia rama, realizando commits y haciendo merge a la rama principal (main) al finalizar su parte.