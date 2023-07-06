<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<h1><a href="/">Matthew Sandoval</a></h1>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		background-color: var(--color-bg-0);
		border: var(--border);
		margin: 4px;
	}

	h1 > a {
		color: var(--text-color);
	}

</style>
