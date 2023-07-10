<script>
	import { formatDate } from '$lib/utils'

	export let title
	export let description
	export let date
	export let categories
	// export let published

</script>

<!-- SEO -->
<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
</svelte:head>

<article>
  <!-- Title -->
	<hgroup>
		<h1>{title}</h1>
		<p>Published at {formatDate(date)}</p>
		<p class="tldr">TL;DR: {description}</p>
	</hgroup>

  <!-- Tags -->
	<div class="tags">
		{#each categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

  <!-- Post -->
	<slot />
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		max-width: 100vw;
		overflow: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
    
</style>
