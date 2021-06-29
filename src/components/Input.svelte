<!--Ahora vamos a aprender a como manejar el Binding de datos de esta forma vamos a manejar datos bidimencionales dentor de nuestro componente-->

<script>
    //E
    export let name = "World";
</script>
<style>

</style>

<!---->
<div class="input">
    <!--Estamos estableciendo un input que estamo manejando
    Que es tipo texto-->
    <input type="text" bind:value={name}>
    <!--Ahora estamos imprimiendo un valor Hello {name}-->
    <p>Hello {name}!</p>
</div>
