import {writable} from "svelte/store";
import { browser } from "$app/environment";


let stored = "";

if(browser){
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const systemTheme = prefersDarkMode.matches
        ? "dark"
        : "light";
    stored = localStorage.getItem("theme") || systemTheme;
}

export const theme = writable(stored || "light");

theme.subscribe((value) => {
    if(browser){
        localStorage.setItem("theme", value);
    }
});
