<script lang="ts">
	import { formatDate } from '$lib/utils'
	export let data
</script>

<!--make a snippet out of this-->
<pre>
{JSON.stringify(data, null, 2)}
</pre>
<svelte:head>
	<!--	<title>{data.meta.title}</title>-->
	<!--	<meta property="og:type" content="article">-->
	<!--	<meta property="og:title" content={data.meta.title}>-->
</svelte:head>

<article>
	<!-- TODO: Single Category Page
		TODO: Single category Image
		TODO: Title of Category
-->

	<!--	<hgroup>-->
	<!--		<h1>{data.meta.title}</h1>-->
	<!--		<p>Published at: {formatDate(data.meta.date)}</p>-->
	<!--	</hgroup>-->

	<!--	<div class="tags">-->
	<!--		{#each data.meta.categories as category}-->
	<!--			<a href="/categories/{category}">&num;{category} </a>-->
	<!--		{/each}-->
	<!--	</div>-->
</article>
