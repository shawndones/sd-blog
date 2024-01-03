<script lang="ts">
	import '../app.css'
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
	import PageTransition from './Transition.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	export let data

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