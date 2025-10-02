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

export function agregarUsuario (nombre="Manuel Santos",correo_electronico="manuelsantos@gmail.com"){ usuarios.push({nombre:nombre,correo_electronico:correo_electronico})}
agregarUsuario()

export function listarusuario() {usuarios.forEach((usuarios)=>{
    console.log(usuarios)
})}
listarusuario()