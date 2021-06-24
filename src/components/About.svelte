<!--Esto es para crear componente o agregar-->
<script>
    //Estamos creando un variable donde tenemos escrito nuestra descripción
    let someText = "Data Science Developer at Platzi";
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
</div>