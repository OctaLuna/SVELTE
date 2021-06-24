<!--Esto es para crear componente o agregar-->
<script>
    //Estamos creando un variable donde tenemos escrito nuestra descripción
    let someText = "Data Science Developer at Platzi";
    //Esta variable es para crear un contador
    let count = 0;

    //Esto es para manejar el contador de los click del boton
    function handleClick(){
        count += 1;
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
    <!--Estamos imprimiento nuestro texto o someText-->
    <p>
        {someText}
    </p>
    <!--Estamos creando un boton para nuestro contador, {count} estamos referenciando la variable count que es el contador
    on:click={handleClick} Esto es para que cada vez que le demos click a nuestro boton llamamos a la funcion handleClick
    count == 0 ? "" : count Esto es para que, cuando el valor de count es 0 no muestre nada pero si no es 0 muestre el contador-->
    <button on:click={handleClick}>Click {count == 0 ? "" : count}</button>
</div>