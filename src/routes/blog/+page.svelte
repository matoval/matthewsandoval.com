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
			<a href="/blog/web-voice-command-package" class="title">web-voice-command Package</a>
			<p class="date">{formatDate("2023-06-04")}</p>
			<p class="description">Using the web-voice-command npm package I just published</p>
		</li>
		<!-- <li class="post">
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
		</li> -->
	</ul>
</div>

<style>
	li {
		list-style: none;
	}
</style>