import { Usuario } from '../models/usuario';
import { usuarios } from '../data/usuario';

export function buscarUsuario (id: number): Promise<Usuario> {
    return new Promise ((resolve, reject) => {

        setTimeout (() => {

            const usuario = usuarios.find((u) => u.id === id);

            if (usuario) {
                resolve(usuario);
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000); 
    });
};

export async function mostrarUsuario () {
    try {
    const usuario = await buscarUsuario(2);

    console.log("Usuario encontrado:");
    console.log(usuario);
    } catch (error) {
        console.log(error);
    }
}

mostrarUsuario();