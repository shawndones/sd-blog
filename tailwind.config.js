/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Define additional color shades for hover and other states if needed
				'primary-hover': '#e8c29e', // Light Theme Hover
				'secondary-hover': '#a0d2eb', // Light Theme Hover
				'accent-hover': '#8ecf89', // Light Theme Hover
				'info-hover': '#31708e',
				'primary-dark': '#162a48', // Dark Theme Hover
				'secondary-dark': '#5c5964', // Dark Theme Hover
				'accent-dark': '#0794a0', // Dark Theme Hover
				'info-dark': '#31708e',
			  }
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
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
			'sunset',
			{
				'digitalSunrise': { // Light Theme
					'primary': '#f9d5a7',
					'secondary': '#89c2d9',
					'accent': '#9ed396',
					'neutral': '#e4e4e7',
					'base-100': '#fafafa',
					'info': '#bcdbea',
					'success': '#fde047',
					'warning': '#ffbb52',
					'error': '#f28482',
					'primary-hover': '#e8c29e',
					'secondary-hover': '#a0d2eb',
					'accent-hover': '#8ecf89',
					'--footer-bg': '#89c2d9',
					'--header-bg': '#1d3557',
					'--card-bg': '#f8f9fa',
        
				  },
				  'technoForest': { // Dark Theme
					"primary": "#00b4fc",
          
 "secondary": "#00c100",
          
 "accent": "#00ff5f",
          
 "neutral": "#0d0d0d",
          
 "base-100": "#32232f",
          
 "info": "#0098c6",
          
 "success": "#729300",
          
 "warning": "#ff9000",
          
 "error": "#ff2a63",
					'--footer-bg': '#2a2a2e',
					'--header-bg': '#1d3557',
					'--card-bg': '#1e293b',
				  }

			},
		]
	}
}
