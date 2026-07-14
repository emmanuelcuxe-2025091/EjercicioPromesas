import { Usuario } from '../models/usuario';
import { usuarios } from '../data/usuario';
import { resolve } from 'node:dns';
import { rejects } from 'node:assert';

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