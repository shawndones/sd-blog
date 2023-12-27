import { browser } from "$app/environment";
import { writable } from "svelte/store";

type Theme = 'digitalSunrise' | 'technoForest';

const userTheme = browser && localStorage.getItem('data-theme')


// store
export const theme = writable(userTheme ?? 'technoForest');

// listen for color scheme change from user
export function toggleTheme() {
    theme.update(currentTheme => {
        const newTheme = currentTheme === 'technoForest' ? 'digitalSunrise' : 'technoForest';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('data-theme', newTheme);
        return newTheme;
    })
};

export function setTheme(newTheme: Theme) {
    theme.set(newTheme)
};

// TODO: create user theme preference 

// Boolean
// const preference = window.matchMedia('(preference-color-scheme: dark').matches;

// preference.addEventListener('change', () => {});