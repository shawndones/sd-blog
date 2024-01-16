export async function load() {
	const portfolioItems = [
		{
			"img": "./portfolio/svelte-leaflet.webp",
			"title": "Sveltekit Contexts & Leaflet",
			"slug": "https://playful-granita-4b1f7c.netlify.app/",
			"tags": ["Sveltekit", "Leaflet", "Netlify"],
			"description": "A simple app that uses the Leaflet JS API to display a map of the world."
		},
		{
			"img": "./portfolio/ky-hunt-map.webp",
			"title": "KY Hunting Maps",
			"slug": "https://trunk--zippy-cactus-e4d855.netlify.app/",
			"tags": ["Vue", "Cesium", "Netlify"],
			"description": "A simple app that uses the Cesium JS API to display hunting units in Kentucky."
		},
		{
			"img": "./portfolio/co-elk-map.webp",
			"title": "Colorado Elk Maps",
			"slug": "https://trunk--deft-begonia-d65f8b.netlify.app/",
			"tags": ["React", "Mapbox", "Netlify"],
			"description": "A simple app that uses the Mapbox GL JS API to display elk hunting units in Colorado."
		},
		{
			"img": "./portfolio/nearby-mountains.webp",
			"title": "Nearby Mountains",
			"slug": "https://celebrated-belekoy-40b049.netlify.app/",
			"tags": ["Vue", "ArcGIS JS Api", "Netlify"],
			"description": "A simple app that uses the ArcGIS JS API to find nearby mountains."
		},
		{
			"img": "./portfolio/us-map.webp",
			"title": "SVG Map Highlighter",
			"slug": "https://codepen.io/shawndones/full/NWNgGLp",
			"tags": ["JavaScript", "SVG", "CodePen"],
			"description": "A simple SVG map highlighter. Hover on a state to highlight the name. Hover a name to highlight the state."
		},
	]


	return { portfolioItems }
}
