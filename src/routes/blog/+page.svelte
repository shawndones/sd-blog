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
    {#each data.posts as post}
      <li class="card shadow-xl hover:shadow-2xl transition-shadow bg-base-100 from-base-200 not-prose outline-base-content/5 relative overflow-hidden bg-gradient-to-b font-sans outline -outline-offset-1 md:flex-row-reverse">
        {#if post.image}
          <figure><img src={post.image} alt="Article Image" class="rounded-t-lg" /></figure>
        {/if}
        <div class="card-body">
          <h2 class="card-title">{post.title}</h2>
          <p class="text-sm text-gray-500">{formatDate(post.date)}</p>
          <p>{post.description}</p>
          <div class="card-actions justify-end">
            <a href={post.slug} class="btn btn-primary">Read more</a>
          </div>
        </div>
        <div class="bg-accent -left-1/5 pointer-events-none absolute bottom-[-50%] aspect-square w-3/4 -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>
        <div class="bg-primary pointer-events-none absolute bottom-[-120%] left-1/2 aspect-square w-full -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>
      </li>
    {/each}
  </ul>
</section>
<style>
	.card {
		max-inline-size: none;
    
	}
</style>
