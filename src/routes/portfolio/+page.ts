export async function load() {
	const portfolioItems = [
		{
			"id": 1,
			"img": "img/portfolio/us-map.webp",
			"title": "SVG Map Highlighter",
			"url": "https://codepen.io/shawndones/full/NWNgGLp",
			"tech": "JavaScript, SVG"
		},
		{
			"id": 2,
			"img": "img/portfolio/nearby-mountains.webp",
			"title": "Nearby Mountains",
			"url": "https://celebrated-belekoy-40b049.netlify.app/",
			"tech": "Vue, ArcGIS JS Api"
		},
		{
			"id": 3,
			"img": "img/portfolio/co-elk-map.webp",
			"title": "Colorado Elk Maps",
			"url": "https://trunk--deft-begonia-d65f8b.netlify.app/",
			"tech": "React, Mapbox"
		},
		{
			"id": 4,
			"img": "img/portfolio/ky-hunt-map.webp",
			"title": "KY Hunting Maps",
			"url": "https://trunk--zippy-cactus-e4d855.netlify.app/",
			"tech": "Vue, Cesium"
		},

		{
			"id": 5,
			"img": "img/portfolio/svelte-leaflet.webp",
			"title": "Sveltekit Contexts &amp; Leaflet",
			"url": "https://playful-granita-4b1f7c.netlify.app/",
			"tech": "Sveltekit, Leaflet"
		},

	]


	return { portfolioItems }
}
