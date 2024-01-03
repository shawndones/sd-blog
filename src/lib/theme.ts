import { browser } from "$app/environment";
import { writable } from "svelte/store";

type Theme = 'digitalSunrise' | 'forest';

const userTheme = browser && localStorage.getItem('data-theme')

// store
export const theme = writable(userTheme ?? 'forest');

// listen for color scheme change from user
export function toggleTheme() {
    theme.update(currentTheme => {
        const newTheme = currentTheme === 'forest' ? 'digitalSunrise' : 'forest';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('data-theme', newTheme);
        return newTheme;
    })
}

export function setTheme(newTheme: Theme) {
    theme.set(newTheme)
}

// TODO: create user theme preference

// Boolean
// const preference = window.matchMedia('(preference-color-scheme: forest').matches;

// preference.addEventListener('change', () => {});

// import { writable } from "svelte/store";
//
// // Assuming you have these themes available
// type Theme =
//   | 'light'
//   | 'dark'
//   | 'cupcake'
//   | 'bumblebee'
//   | 'emerald'
//   | 'corporate'
//   | 'synthwave'
//   | 'retro'
//   | 'cyberpunk'
//   | 'valentine'
//   | 'halloween'
//   | 'garden'
//   | 'forest'
//   | 'aqua'
//   | 'lofi'
//   | 'pastel'
//   | 'fantasy'
//   | 'wireframe'
//   | 'black'
//   | 'luxury'
//   | 'dracula'
//   | 'cmyk'
//   | 'autumn'
//   | 'business'
//   | 'acid'
//   | 'lemonade'
//   | 'night'
//   | 'coffee'
//   | 'winter'
//   | 'dim'
//   | 'nord'
//   | 'sunset';
//
// const userTheme = browser && localStorage.getItem('data-theme')
//
//
// // store
// export const theme = writable(userTheme ?? 'dark');
//
// export function setTheme(newTheme: Theme) {
//     theme.set(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('data-theme', newTheme);
// };
