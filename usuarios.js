 export const usuarios= [
    {
      "nombre": "Carlos Buitrago",
      "correo_electronico": "carlosbb@gmail.com"
    },
    {
      "nombre": "Ana Pérez",
      "correo_electronico": "anaaaperez@gmail.com"
    },
    {
      "nombre": "Luis Gómez",
      "correo_electronico": "luisgogomez@gmail.com"
    }
  ]

export function agregarUsuario (nombre,correo_electronico){ usuarios.push({nombre:nombre,correo_electronico:correo_electronico})}
agregarUsuario("Manuel Santos","manuelsantos@gmail.com")

export function listarusuario() {usuarios.forEach((usuarios)=>{
    console.log(usuarios)
})}
listarusuario()