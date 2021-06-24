<script>
	//Estamos importanto nuestro About donde tenemos nuestro texto
	import About from "./components/About.svelte"
	//Estamos exportando nuestro texto de nuestro script Text.svelte
	import Text from "./components/Text.svelte"
	//Estamos exportando nuestro script Person
	import Person from "./components/Person.svelte"

	export let name;
	//Estamos creando una variable en Svelte, de nombre LastName
	//Si queremos traerlo como una propiedad tenemos que incluir el valor export
	export let lastName;
	//Esto es para agregar un nuevo elemento a nuestro proyecto
	let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png"

	//const es para que sea un elemento unico dentro del documento
	//Estos los datos personajes 
	const data = {
		name: "Octavio",
		LastName: "Luna",
		age: 16,
	}
</script>

<style>
	/*Vamos a poner estilos globales a la aplicación*/
	:global(body){
		/*Esto es para poner color en nuestro fondo*/
		background-color: var(--color-fondo);
		color: #000000;
	} 
	/*Ahora vamos a aplicar variables, vamos a poder establecer los colores que vamos a utilizar dentro de nuestro proyecto*/
	:global(:root){
		/*Estamos creando variables para despues no tener que utilizar o escribir muchas veces un tipo de color */
		--color-texto: rgb(0, 0, 0);
		--color-fondo: #a1fcee;
		/*#5affe7;*/
		/*00f2ff;*/
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/*Estamos editanto el tamaño de las imagenenes que tenemos en nuestro proyecto que esten en main*/
	main img {
		width: 30%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<!--Estamos llamando a el script About, pero pasa lo mismo que con Text que no tiene un valor entonces se pondra el valor por defecto-->
	<About />
	<!--Estamos imprimiendo un valor de nuestra variable anotherText de nuestro script Text-->
	<Text anotherText= "Hola!" />
	<!--Estamos Usando nuestro script Text pero sin un valor, entonces se pondra el valor por defecto-->
	<Text />
	<Person name={data.name} LastName={data.LastName} age={data.age} />
	<img src={svelteLogo} alt="Svelte">
</main>

