<script>
	import { formatDate } from '$lib/utils'
</script>


<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog" />
</svelte:head>

<div class="blog-home">
	<ul>
		<li class="post">
			<a href="/blog/first-post" class="title">First Post</a>
			<p class="date">{formatDate("2023-11-14")}</p>
			<p class="description">First post</p>
		</li>
		<li class="post">
			<a href="/blog/next" class="title">Next</a>
			<p class="date">{formatDate("2023-4-16")}</p>
			<p class="description">Test post.</p>
		</li>
		<li class="post">
			<a href="/blog/test1" class="title">test1</a>
			<p class="date">{formatDate("2023-4-16")}</p>
			<p class="description">Test post.</p>
		</li>
		<li class="post">
			<a href="/blog/test2" class="title">Second</a>
			<p class="date">{formatDate("2023-4-16")}</p>
			<p class="description">Second post.</p>
		</li>
	</ul>
</div>

<style>
	li {
		list-style: none;
	}
</style>