import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Octavio',
		lastName: "Luna"
	}
});

export default app;