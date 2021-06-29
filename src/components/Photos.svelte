<!--Cada componente tiene su ciclo de vida y este inicia cuando se crea el componente y cuando se destruye, partiendo de esta logica de como funciona el ciclo de vida, vamos a trabajar con el ciclo de vida de un componente para ver como vamos a hacer peticiones a una Api y poder presentar la información que necesitamos en nuestro componente.-->

<script>
    //Vamos a importar un metodo que ya nos provee svelte que es onMount, el cual ejecuta un llamdo despues de que el componente sea montado
    import {onMount} from "svelte"

    //Ahora tenemos que hacer la logica de nuestra aplicacion, vamos a crear un arreglo donde vamos a guardar lo que vamos a traer despues de montarse, en este caso seria una peticion a una Api y despues vamos a usar el valor para hacer render de los elementos 
    
    //Creamos un arreglo vacio
    let photos = [];

    //Lo que vamos a hacer es una funcion asincrona que va a ajecutarse para traer un valor que es la Api a la cual nosotros le queremos pegar
    //Vamos a usar asyncn que es una funcion anonima 
    onMount(async() =>{
        
        //Esto es para ver cuando suceda
        console.log("onMount");

        //Vamos a hacer la logica para traer ese valor 
        
        //Estamos trayendo elementos randomicos 
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos?_limit=20");
        
        //Esta es la respuesta del valor que acabamos de asignar al await del fetch de response
        photos = await response.json();
    })

</script>

<style>

</style>

<div class="Photos">
    <!--Le estamos diciendo que traiga photo del valor photos-->
    {#each photos as photo}
        <!--Esto es para establecer lo que es nuestra imagen -->
        <figure>
            <!--Estamos poniendo la imagen, src es la direccion de nuestra imagen que en este caso el response tiene la direccion y alt que es el titulo que lo tiene photo.title-->
            <img src={photos.thumbnailUrl} alt={photo.title}/>
            <!--Este es un capscion que vamos a mostrar-->
            <figcaption>{photo.title}</figcaption>
        </figure>  
        <!--Esto es para que se muestre esto antes de que cargue lo demas-->
        {:else}
            <p>Loading...</p>
    {/each}
</div>