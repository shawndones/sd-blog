<script lang="ts">
	import "../app.css";
	import Header from './header.svelte';
	import Footer from './footer.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
</script>

<div class="layout">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
