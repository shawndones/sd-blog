<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './Toggle.svelte'
	// import ThemeSelector from './ThemeSelector.svelte';
</script>
<header>
	<nav class="navbar">
		<div class="navbar-start">
		  <a class="title btn btn-ghost text-xl hover:text-info" href="/">
			{config.title}
		  </a>
		</div>
		<div class="navbar-center lg:flex hidden">
		  <ul class="menu menu-horizontal p-0">
			<li><a href="/about" class="hover:bg-base-200">About</a></li>
			<li><a href="/contact" class="hover:bg-base-200">Contact</a></li>
			<li><a href="/rss.xml" target="_blank" class="hover:bg-base-200">RSS</a></li>
		  </ul>
		</div>
		<div class="navbar-end">
		  <Toggle />
<!--			<ThemeSelector />-->
		</div>
	  </nav>
	<!-- Large Header Image Section -->
	<div class="header-image">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="./header.webp" alt="Tech Header Image" class="w-full h-auto" />
	  </div>
</header>


  <style>
	.navbar {
		background-color: var(--header-bg);
	}
	.header-image img {
	  width: 100%;
	  height: auto;
	  max-height: 400px; /* Adjust as needed */
	  object-fit: cover;
	}
  
	.navbar {
	  color: #f0f0f0;
	}
  
	/* Rest of your styles... */
  </style>
  