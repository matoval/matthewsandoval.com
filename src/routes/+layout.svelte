<script>
	import { page } from '$app/stores';
	import { mobile, mobileNav } from '../stores';
	import Header from './Header.svelte';
	import './styles.css';
	import resume from '$lib/Matthew_Sandoval_Resume.pdf'

	const currentYear = new Date().getFullYear();
	let isMobile
	let isMobileNavOpen
	let innerWidth = 0

	mobile.subscribe((value) => {
		isMobile = value;
	});

	mobileNav.subscribe((value) => {
		isMobileNavOpen = value;
	})

	const handleClick = () => {
		console.log('link clicked')
		mobileNav.update(() => false)
	}

	$: innerWidth <= 480 ? mobile.update(() => true) : mobile.update(() => false);

</script>

<svelte:window bind:innerWidth />
<div class="app">
	<Header />
	{#if !isMobile}
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
						<a href="https://www.linkedin.com/in/matoval/" target="_blank" rel="noopener noreferrer">
							linkedin
						</a>
					</li>
					<li>
						<a href="https://github.com/matoval" target="_blank" rel="noopener noreferrer">
							github
						</a>	
					</li>
					<li>
						<a href={resume} target="_blank" rel="noopener noreferrer">
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
					<li class:active={$page.url.pathname === "/blog/first-post"}>
						<a href="/blog/first-post" class:active={$page.url.pathname === "/blog/first-post"}>First post</a>
					</li>
					<li class:active={$page.url.pathname === "/blog/next"}>
						<a href="/blog/next" class:active={$page.url.pathname === "/blog/next"}>Next</a>
					</li>
					<li class:active={$page.url.pathname === "/blog/test1"}>
						<a href="/blog/test1" class:active={$page.url.pathname === "/blog/test1"}>Test 1</a>
					</li>
					<li class:active={$page.url.pathname === "/blog/test2"}>
						<a href="/blog/test2" class:active={$page.url.pathname === "/blog/test2"}>Test 2</a>
					</li>
					<li>
						<a href="/blog">more blogs...</a>
					</li>
				</ul>
			</div>
		</section>
		<slot />
	</main>
	{:else}
	<main>
		{#if isMobileNavOpen}
		<section>
			<div class="nav">
				<div class="nav-title">main</div>
				<ul>
					<li class:active={$page.url.pathname === "/"}>
						<a on:click={handleClick} href="/" class:active={$page.url.pathname === "/"}>
							home
						</a>
					</li>
					<li class:active={$page.url.pathname === "/blog"}>
						<a on:click={handleClick} href="/blog" class:active={$page.url.pathname === "/blog"}>
							blog
						</a>
					</li>
				</ul>
			</div>
			<div class="nav">
				<div class="nav-title">links</div>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/matoval/" target="_blank" rel="noopener noreferrer">
							linkedin
						</a>
					</li>
					<li>
						<a href="https://github.com/matoval" target="_blank" rel="noopener noreferrer">
							github
						</a>	
					</li>
					<li>
						<a href={resume} target="_blank" rel="noopener noreferrer">
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
					<li class:active={$page.url.pathname === "/blog/first-post"}>
						<a on:click={handleClick} href="/blog/first-post" class:active={$page.url.pathname === "/blog/first-post"}>First post</a>
					</li>
					<li class:active={$page.url.pathname === "/blog/next"}>
						<a on:click={handleClick} href="/blog/next" class:active={$page.url.pathname === "/blog/next"}>Next</a>
					</li>
					<li class:active={$page.url.pathname === "/blog/test1"}>
						<a on:click={handleClick} href="/blog/test1" class:active={$page.url.pathname === "/blog/test1"}>Test 1</a>
					</li>
					<li class:active={$page.url.pathname === "/blog/test2"}>
						<a on:click={handleClick} href="/blog/test2" class:active={$page.url.pathname === "/blog/test2"}>Test 2</a>
					</li>
					<li>
						<a on:click={handleClick} href="/blog">more blogs...</a>
					</li>
				</ul>
			</div>
		</section>
		{:else}
		<slot />
		{/if}
	</main>
	{/if}

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

	@media (max-width: 480px) {
		section {
			width: 100vw;
		}

		.nav {
			width: 99%;
		}
		
		footer {
			padding: 12px 0;
			text-align: center;
			font-size: 10px;
		}
	}
</style>
