<!--Esto es el Evento del DOM-->
<script>
    //Lo que haremos es darle vida a la estructura inicial

    //Estamos trayendo una variable que creamos anteriormente
    export let count = 0;
    export let text;
</script>
<style>

</style>

<!--Lo que estamos haciendo es que imprima el texto-->
<button on:click>
    {text}
    <!--  count == 0 ? "" : count Esto es para que, cuando el valor de count es 0 no muestre nada pero si no es 0 muestre el contador-->
    {count === 0 ?  "" : count}
</button>