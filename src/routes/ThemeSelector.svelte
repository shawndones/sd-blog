<script>
	import { theme, setTheme } from '$lib/theme';
	import { browser } from '$app/environment';

	// An array of available themes
	let themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
		'dim',
		'nord',
		'sunset'
	];


	// Function to change theme
	function changeTheme(event) {
		setTheme(event.target.value)
	}
	const currentTheme =  (browser && localStorage.getItem('data-theme')) ?? 'dark';
</script>

<select on:change={changeTheme}>
	{#if currentTheme}
		<option value={currentTheme}>{currentTheme}</option>
	{/if}
	<option value={currentTheme}>{currentTheme}</option>

	{#each themes as themeName}

		<option value={themeName}>{themeName}</option>
	{/each}
</select>

