import { writable } from 'svelte/store';
export const searchQuery = writable({ searchTerm: "", selectedFilter: ""});