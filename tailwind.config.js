import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
			colors: {

			  }
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			)
		}),
		require('daisyui'),
	],
	daisyui: {
		themes: [
			{
				'forest': {
					'primary': '#1eb854',
					'primary-focus': '#188c40',
					'primary-content': '#ffffff',

					'secondary': '#20d55f',
					'secondary-focus': '#18aa4b',
					'secondary-content': '#ffffff',

					'accent': '#d99330',
					'accent-focus': '#b57721',
					'accent-content': '#ffffff',

					'neutral': '#474747',
					'neutral-focus': '#2e2e2e',
					'neutral-content': '#ffffff',

					'base-100': '#171212',
					'base-200': '#110e0e',
					'base-300': '#060404',
					'base-content': '#ffffff',

					'info': '#66c7ff',
					'success': '#87cf3a',
					'warning': '#e1d460',
					'error': '#ff6b6b',

					'--rounded-box': '1rem',
					'--rounded-btn': '.5rem',
					'--rounded-badge': '1.9rem',

					'--animation-btn': '.25s',
					'--animation-input': '.2s',

					'--btn-text-case': 'uppercase',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px',
				},
			},
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
        
				  },

			},
		]
	}
}
