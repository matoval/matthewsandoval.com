import { dev } from '$app/environment';

export async function load({ fetch }) {
	const response = await fetch('api/posts')
	const posts = await response.json()
	return { posts }
}

export const csr = dev;

export const prerender = true;