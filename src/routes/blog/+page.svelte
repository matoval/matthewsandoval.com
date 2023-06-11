<script>
	import { formatDate } from '$lib/utils'

	export let data
</script>


<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog" />
</svelte:head>

<div class="blog-home">
	<ul>
		{#each data.posts as post }
			<li class="post">
				<a href={`/blog/${post.slug}`} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</div>

<style>
	li {
		list-style: none;
	}
</style>