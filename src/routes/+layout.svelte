<script>
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import './styles.css';
	import resume from '$lib/Matthew_Sandoval_Resume.pdf'

	export let data

	const currentYear = new Date().getFullYear();
</script>

<div class="app">
	<Header />

	<main>
		<section>
			<div class="nav">
				<div class="nav-title">main</div>
				<ul>
					<li class:active={$page.url.pathname === "/"}>
						<a href="/" class:active={$page.url.pathname === "/"}>
							home
						</a>
					</li>
					<li class:active={$page.url.pathname === "/blog"}>
						<a href="/blog" class:active={$page.url.pathname === "/blog"}>
							blog
						</a>
					</li>
				</ul>
			</div>
			<div class="nav">
				<div class="nav-title">links</div>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/matoval/">
							linkedin
						</a>
					</li>
					<li>
						<a href="https://github.com/matoval">
							github
						</a>	
					</li>
					<li>
						<a href={resume}>
							resume
						</a>
					</li>
					<li>
						<a href="mailto:mat24c@gmail.com">
							email
						</a>
					</li>
				</ul>
			</div>
			<div class="nav">
				<div class="nav-title">
					<a href="/blog">
						blog
					</a>
				</div>
				<ul>
					{#each data.posts as post, i }
						{#if i < 6}
							<li><a href={`/blog/${post.slug}`} class="title">{post.title}</a></li>
						{:else}
							<li><a href="/blog">more blogs...</a></li>
						{/if}
					{/each}
				</ul>
			</div>
		</section>
		<slot />
	</main>

	<footer>
		<p>Copyright &copy; {currentYear} Matthew Sandoval All Rights Reserved</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	section {
		margin: 4px;
	}

	.nav {
		margin-bottom: 10px;
		padding: 6px;
		border: var(--border);
		width: 140px;
	}

	.nav-title {
		width: 30%;
		height: 30px;
		margin-top: -15px;
		text-align: center;
		background-color: var(--color-bg-1);
	}

	ul {
		padding: 0;
		margin-top: -15px;
	}

	li {
		list-style: none;
		padding: 4px;
	}

	li.active {
		background-color: var(--active-bg);
		color: var(--active-text);
	}

	a {
		display: inline-block;
		width: 100%;
	}

	a.active {
		color: var(--active-text);
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
