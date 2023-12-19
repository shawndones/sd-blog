<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<!--make a snippet out of this-->
<!--<pre>-->
<!--{JSON.stringify(data, null, 2)}-->
<!--</pre>-->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article">
	<meta property="og:title" content={data.meta.title}>
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published on {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<a href="/categories/{category}">&num;{category} </a>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>

</article>


<style lang="scss">

    article {
			max-inline-size: var(--size-content-3);
			margin-inline: auto;
		}
		h1 {
				@apply text-4xl uppercase;
		}
		h1 + p {
				@apply text-gray-500 mt-2;
		}
		.tags {
				@apply text-sm;
				@apply flex gap-3 mt-7;
		}
		.tags * {
			@apply px-2 py-3 rounded-md ;
		}

</style>