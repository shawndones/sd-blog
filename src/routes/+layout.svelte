<script lang="ts">
	import '../app.css'
	import Header from './header.svelte'
	import Footer from './footer.svelte'
	import PageTransition from './transition.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	export let data

	console.log(data.url)
</script>

<div class="page-container">
	<Header />
	<main class="container mx-auto px-4">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>

<style lang="scss">
	.page-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		flex: 1;
	}
</style>