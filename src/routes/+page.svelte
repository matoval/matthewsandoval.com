<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="main-content">
		<img src="ProfilePicture.jpg" alt="Matthew Sandoval" width="300px">
		<p>Matthew is an experienced and versatile software engineer with a track record of success in diverse roles. His career began as a Web Developer, where he built performance-driven websites and collaborated with design teams. At ChipDrop, he added map-based features to a Django app and conducted comprehensive testing. Matthew's skills also encompass Python, Go, Linux, Ansible, HTML5, CSS3, JavaScript, Svelte.JS, and React.JS, with four years of experience. His tenure at Red Hat saw him contribute significantly to Edge-Frontend, take on repository maintenance and CI/CD pipeline management, and mentor team members. In end-to-end delivery, he introduced tools, improved processes, and maintained a customer-centric focus. Matthew's transition to Ansible collections further showcased his technical prowess, leadership, and mentorship abilities. Currently contributing to the Receptor project in Golang, he continues to enhance code quality and reliability. Matthew is a well-rounded and impactful engineer with a proven history of delivering high-quality solutions and fostering team growth.</p>
	</div>
</section>

<style>
	.main-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 15px;
		font-size: 18px;
		width: 80vw;
	}
	p {
		max-width: 70vw;
		line-height:35px;
	}
	@media (max-width: 720px) {
		.main-content {
			width: 100vw;
			padding: 2px;
		}
		p {
			max-width: 90vw;
			font-size: 13px;
		}
	}
</style>
