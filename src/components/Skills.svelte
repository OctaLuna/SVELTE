<!--Estamos creando un arreglo de objetos que contienen la información de nuestras habilidades-->

<script>
    //Estamos creando un arreglo
    let Skills = [
        {
            id: 1,
            name: "HTML",
        },
        {
            id: 2,
            name: "CSS"
        },
        {
            id: 3,
            name: "JavaScript"
        },
        {
            id:4,
            name: "Python"
        },
        {
            id:4,
            name: "Arduino"
        },
        {
            id:5,
            name: "C++"
        },


    ]
</script>

<style>
    .Skills {
        /*Esto es para ordenarlos*/
        display: flex;
        /*Esto es para centrearlos*/
        align-items: center;
        /*Esto es para tener nuestro contenido en el centro*/
        justify-content: center;
    }   
    ul {
        /*A nuestra lista no ordenada le estamos poniendo un margen de 0*/
        margin: 0;
        /*Esto recetea la configuracion que originalmente suele tener*/
        padding: 0;
        /*Esto es para no tener boulet*/
        list-style: none;
    }
    li {
        /*Esto es para ordenarlo*/
        display: inline;
        /*Le estamos dando margenes, con las manecillas del relog*/
        margin: 0 0 0 0.4em;
    }
</style>

<div class="Skills">
    <!--Una vez tenido el Skills, vamos a estructurado un poco mas elegante-->
    <h3>Habilidades</h3>
    <!--Esto es una lista no ordenada-->
    <ul>
        <!--Estamos usando each, primero metemos el elemento que queremos iterar que es Skills, as name es para que lo estructura y i es para que extraiga el indice-->
        {#each Skills as {name}, i}
        <!--De esta forma tenemos nuestra estructura de control con el cual vamos a iterar-->
        <li>{name}</li>
        {/each}    
    </ul>


</div>