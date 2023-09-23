import { writable } from 'svelte/store';

export const mobile = writable(false);
export const mobileNav = writable(false);
export const loading = writable(true);