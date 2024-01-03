<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="my-10">
	<!--	TODO: List out all of the posts with a default image or post image for each post.
		TODO: Make the image clickable and link to the category page.
		TODO: Make it a grid of images.
-->
	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.portfolioItems as post}
			<li class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
				{#if post.image}
					<figure class="max-md:bg-primary/10 isolate shrink-0 md:w-2/3"><img class="pointer-events-none" alt="daisyUI store" src={post.image} ></figure>
<!--					<figure><img src={post.image} alt="Article Image" class="rounded-t-lg" /></figure>-->
				{/if}
				<div class="card-body">
					<h2 class="card-title">{post.title}</h2>
<!--					<p class="text-sm text-gray-500">{formatDate(post.date)}</p>-->
					<p>{post.description}</p>
					<div class="card-actions justify-end">
						<a href={post.slug} class="btn btn-primary">Read more</a>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>
<style>
    .card {
        max-inline-size: none;
        background-color: var(--card-bg);
    }
</style>
