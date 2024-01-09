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
	<ul class="grid grid-cols-1 xl:grid-cols-2 gap-12">
		{#each data.portfolioItems as post}
			<li class="card bg-base-100 from-base-200 outline-base-content/5 relative overflow-hidden bg-gradient-to-b font-sans shadow-lg outline -outline-offset-1 flex-row-reverse">
				{#if post.img}
					<figure class="absolute top-0 left-0 w-1/2 h-full rounded-none"><img class="pointer-events-none object-cover w-full h-80" alt="{post.title}" src="{post.img}"><div class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10"></div></figure>
				{/if}

				<div class="card-body z-10 relative w-1/2">
					<h2 class="card-title text-3xl">{post.title}</h2>
<!--					<p class="text-sm text-gray-500">{formatDate(post.date)}</p>-->
					<p>{post.description}</p>
					<div class="tags">
						{#each post.tags as tag}
							<a href="/categories/{tag}" class="badge bg-accent-focus text-white px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2 transition-colors duration-300">{tag}</a>
						{/each}
					</div>


				</div>
				<div class="card-actions justify-end absolute right-5 bottom-5">
					<a href={post.slug} class="btn btn-primary">View Project</a>
				</div>
				<div class="bg-secondary -left-1/10 pointer-events-none absolute bottom-[-50%] aspect-square w-3/4 -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>
				<div class="bg-neutral pointer-events-none absolute bottom-[-120%] left-1/4 aspect-square w-full -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>
			</li>





<!--			<li class="card card-compact w-96 bg-base-100 shadow-xl overflow-hidden">-->
<!--				<figure><img src="{post.img}" alt="Shoes" /></figure>-->
<!--				<div class="card-body">-->
<!--					<h2 class="card-title">{post.title}</h2>-->
<!--					<p>{post.description}</p>-->
<!--					<div class="card-actions justify-end">-->
<!--						{#each post.tags as tag}-->
<!--							<a href="/categories/{tag}" class="badge badge-outline">{tag}</a>-->
<!--						{/each}-->
<!--					</div>-->
<!--					<div class="bg-secondary -left-1/10 pointer-events-none absolute bottom-[-50%] aspect-square w-3/4 -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>-->
<!--					<div class="bg-neutral pointer-events-none absolute bottom-[-120%] left-1/4 aspect-square w-full -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>-->
<!--				</div>-->

<!--			</li>-->



		{/each}
	</ul>
</section>
<style lang="scss">
    .card {
        max-inline-size: none;
				max-width: none;
			figure {
				position: relative;
        height: 100%;
			}
			img {
				//max-inline-size: none;

			}
    }

</style>
