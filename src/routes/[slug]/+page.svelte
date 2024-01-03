<script lang="ts">
	import { formatDate } from '$lib/utils'
	export let data
</script>

<!--make a snippet out of this-->
<!--<pre>-->
<!--{JSON.stringify(data, null, 2)}-->
<!--</pre>-->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="article-wrapper">
	<hgroup class="title-group mb-8">
	  <h1 class="text-5xl font-bold mb-2 text-primary">{data.meta.title}</h1>
	  <time datetime={data.meta.date} class="block text-secondary italic mb-4">
		Published on {formatDate(data.meta.date)}
	  </time>
	</hgroup>
  
	<div class="tags mb-6">
	  {#each data.meta.categories as category}
		<a href="/categories/{category}" class="badge bg-accent text-white px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2 hover:bg-accent-dark transition-colors duration-300">{category}</a>
	  {/each}
	</div>
  
	<div class="content prose">
	  <svelte:component this={data.content} />
	</div>
  </article>
  
  <style lang="scss">
	.article-wrapper {
	  @apply max-w-5xl mx-auto py-12 px-6;
	}
  
	.title-group {
	  @apply mb-8;
	}
  
	.tags {
	  @apply flex flex-wrap gap-2 mb-6;
	}
  
	.tag {
	  @apply bg-accent text-white px-4 py-1 rounded-full text-sm font-medium no-underline hover:bg-accent-dark transition-colors duration-300;
	}
  
	.content {
	  @apply text-base leading-relaxed text-gray-700;
  
	  h2, h3, h4, h5, h6 {
		@apply text-primary;
	  }
  
	  p {
		@apply mb-4;
	  }
  
	  a {
		@apply text-info underline hover:text-info-dark;
	  }
  
	}
  </style>
  
