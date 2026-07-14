import { mostrarUsuario, buscarPorNombre, mostrarTodos, mayor, contadorUsuario } from '../services/usuarioService';
import {rl } from '../utils/readline';

export function menu (): void {

    console.log("");
    console.log("=== Bienvenido ===");
    console.log("");
    console.log("==================");
    console.log("| Opciones:      |");
    console.log("| 0. Salir       |");
    console.log("| 1. Opción 1    |");
    console.log("| 2. Opción 2    |");
    console.log("| 3. Opción 3    |");
    console.log("| 4. Opción 4    |");
    console.log("| 5. Opción 5    |");
    console.log("==================");
    console.log("");

    rl.question("Seleccione una opción: ", async (opc) => {
        switch (opc) {
            case "1":

                rl.question("Escriba el ID del usuario:", async (id) => {
                    await mostrarUsuario(parseInt(id));
                    menu();
                });

                break;
            case "2":

                rl.question("Escriba el nombre del usuario:", async (nombre) => {
                    try {
                        const usuario = await buscarPorNombre(nombre);
                        console.table(usuario);
                    } catch (error) {
                        console.log(error);
                    } finally {
                        menu();
                    }
                });

                break;
            case "3":
                console.log("Buscando usuarios...");

                try {
                    const usuarios = await mostrarTodos();

                    const tabla = usuarios.map(usuario => ({
                        "ID": usuario.id,
                        "Nombre": usuario.nombre,
                        "Contraseña": usuario.contrasena,
                        "Edad": usuario.edad,
                        "Correo": usuario.correo
                    }));

                    console.table(tabla);
                } catch (error) {
                    console.log(error);
                } finally {
                    menu();
                }

                break;
            case "4":
                console.log("Usuarios mayores de 21 años:");
                console.table(mayor());
                menu();
                break;
            case "5":
                console.log("Usuarios registrados:");
                console.log(contadorUsuario());
                menu();
                break;
            case "0":
                console.log("Gracias por usar el programa");
                rl.close();
                break;
            default:
                console.log("Opción no encontrada");
                menu();
                break;
        }
    });
};