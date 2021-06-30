<!--El Store es utilizar un valor que se repite en varios componentes y poder actualizar su estado de una forma muy amigable-->

<script>
    //Estamos importando el valor de store que creamos 
    import {count} from "../store/store.js";

    //Esta es la funcion para el button 
    function handlClick(){
        //Esto update para poder actualizar ese valor en vivo
        //n es el valor que tiene, y le sumamos 1
        count.update(n => n + 1);
    }
</script>
<style>
    button{
        background-color: #f76027;
        color: white;
        border: none;
        /*Esto es para que sea ligeramente redondeado*/
        border-radius: 4px;
        /*Un padding para que tenga grosor*/
        padding: 0.5rem;
        /*Vamos a transformar el texto en mayusculas*/
        text-transform: uppercase;
        /*Esto es para que nos ponga la manita al darle click*/
        cursor: pointer;
    }
</style>

<!--Estamos creando un boton 
Estamos-->
<button on:click={handlClick}>
    <!--Usamos el simbolo $ para el manejo reactivo de nuestra variable, que seria como se actualizara en dado caso que cambiemos el valor 
    Hacemos una operación terniaria, ? "" esto es si count es igual a 0 haga esto "",  : $count pero si no es sale $count-->
    Click {$count === 0 ? "": $count}
</button>