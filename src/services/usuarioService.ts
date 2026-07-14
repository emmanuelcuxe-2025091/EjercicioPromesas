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


export function buscarPorNombre (nombre: string): Promise<Usuario> {
    return new Promise ((resolve, reject) => {
        
        const nombres = usuarios.find((u) => u.nombre === nombre);

        if (nombres) {
            resolve(nombres);
        } else {
            reject("Usuario no encontrado");
        }
    });
};


export function mostrarTodos(): Promise<Usuario[]> {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {

            if (usuarios.length > 0) {
                resolve(usuarios);
            } else {
                reject("Arreglo no encontrado");
            }
        }, 3000);
    });
};