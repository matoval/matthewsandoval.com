<script>
	import { mobile, mobileNav } from '../stores';

	let isMobileNavOpen
	let isMobile
	let innerWidth = 0
	$: innerWidth != 0 && innerWidth <= 720 ? mobile.update(() => true) : mobile.update(() => false);

	mobile.subscribe((value) => {
		isMobile = value;
	});

	mobileNav.subscribe((value) => {
		isMobileNavOpen = value;
	})


	function dropdown() {
		mobileNav.update(value => !value)
	}
</script>

<header>
	<h1><a href="/">Matthew Sandoval</a></h1>
	{#if isMobile}
		<button class="mobile-nav-btn" on:click={dropdown}>{isMobileNavOpen ? "[X]" : "[ ]"}</button>
	{/if}
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

	@media (max-width: 720px) {
		header {
			width: 100vw;
		}
		.mobile-nav-btn {
			display: block;
			position: fixed;
			right: 2px;
			top: 8px;
			background: none;
			border: none;
			color: var(--text-color);
			width: 30px;
		}
	}

</style>
