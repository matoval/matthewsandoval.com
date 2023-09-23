import { dev } from '$app/environment';

// export async function load({ fetch }) {
// 	const response = await fetch('api/posts')
// 	const posts = await response.json()
// 	return { posts }
// }



// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
