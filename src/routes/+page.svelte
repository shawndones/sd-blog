<script lang="ts">
  import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

  export let data

</script>


<svelte:head>
  <title>{config.title}</title>
</svelte:head>
<section>
  <!--	TODO: List out all of the posts with a default image or post image for each post.
			TODO: Make the image clickable and link to the category page.
			TODO: Make it a grid of images.
-->
  <ul class="posts p-4">
    {#each data.posts as post}
    <li class="card lg:card-side bg-base-100 shadow-xl">
      {#if post.image}
        <figure><img src="path_to_your_image.jpg" alt="Article Image"></figure>
      {/if}
      <div class="card-body">
        <h2 class="card-title">{post.title}</h2>
        <p class="date">{formatDate(post.date)}</p>
        <p>{post.description}</p>
        <div class="card-actions justify-end">
          <a href="{post.slug}" class="btn btn-primary">Read more</a>
        </div>
      </div>
    </li>
    {/each}
  </ul>
</section>


<style>
.card {
  max-inline-size: none;
}
</style>
