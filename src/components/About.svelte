<!--Esto es para crear componente o agregar-->
<script>
    //VARIABLES
    //Estamos creando un variable donde tenemos escrito nuestra descripción
    let someText = "Data Science Developer at Platzi";
    //Esta variable es para crear un contador
    let count = 0;
    //Esto es parte del DarkMode para mostrar elemento en casos especiales
    let styles = { darkMode: false}

    //FUNCIONES
    //Esto es para manejar el contador de los click del boton
    function handleClick(){
        count += 1;
    }
    //Esta función es para que, al hacer click en el boton se active el DarkMode
    function toggle() {
        //Esto es para decir que si el valor de la variable es falso conviertelo a true y viceversa
        styles.darkMode = !styles.darkMode;
        //Como svelte no tiene un virtual bod, podemos usar window, documento para acceder directamente al body y accedemos a la lista de clases que tenemos y le pasamos el valor toggle que en este caso es dark-mode, de esta forma cada vez que hagamos toggle se la asignamos a el documento en este caso a body
        window.document.body.classList.toggle("dark-mode")
    }


</script>




<style>
    /*Le Estamos dando estilo a nuestro texto*/
    p{
        color: var(--color-texto);
    }
</style>
<!--Estamos estableciendo nuestros componentes, de esta forma no tendremos errores -->
<div class="About">

    <!--Esta es una condicional que aparecera cuando estemos en dark mode-->
    {#if !styles.darkMode}
        <p>{someText}</p>
    {:else}
        <p>Hello Dark Mode</p>
    {/if}


    <!--Estamos imprimiento nuestro texto o someText
    <p>
        {someText}
    </p>
    -->

    
    <!--Estamos creando un boton para nuestro contador, {count} estamos referenciando la variable count que es el contador
    on:click={handleClick} Esto es para que cada vez que le demos click a nuestro boton llamamos a la funcion handleClick
    count == 0 ? "" : count Esto es para que, cuando el valor de count es 0 no muestre nada pero si no es 0 muestre el contador-->
    <button on:click={handleClick}>Click {count == 0 ? "" : count}</button>
    <!--Creamos un boton para cambiar al modo dark-mode-->
    <button on:click={toggle}>Dark Mode</button>
</div>