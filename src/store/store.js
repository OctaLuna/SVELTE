//De esta forma estamos creando un valor que podemos utilizar donde sea necesario

// Estamos trayendo una funcion de svelte store
import {writable} from "svelte/store"; 

//Estamos exportando una constante con el valor que hemos traido y lo inicializamos con el valor 0
export const count = writable(0);
