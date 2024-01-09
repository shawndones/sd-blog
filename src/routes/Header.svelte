<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './Toggle.svelte'
	import { Home } from 'lucide-svelte'
	// import ThemeSelector from './ThemeSelector.svelte';
</script>
<header class="relative">
	<nav class="navbar">
		<div class="navbar-start">
		  <a class="title btn btn-ghost text-xl hover:text-info" href="/">
			<Home />
		  </a>
		</div>
		<div class="navbar-center lg:flex hidden">
		  <ul class="menu menu-horizontal p-0">
			<li><a href="/about" class="hover:bg-base-200">About</a></li>
			<li><a href="/portfolio" class="hover:bg-base-200">My Work</a></li>
<!--			<li><a href="/rss.xml" target="_blank" class="hover:bg-base-200">RSS</a></li>-->
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
<!--	<h1 class="absolute bottom-4 left-4 text-6xl text-shadow-[0_4px_8px_var(&#45;&#45;tw-shadow-color)] shadow-black-500/50">Shawn Dones</h1>-->
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
	  /*color: #f0f0f0;*/
	}
  /*h1 {*/
	/*		font-family: "Luxurious Script", sans-serif;*/
	/*}*/
	/* Rest of your styles... */
  </style>
  