<script lang="ts">
	import Stat from './Stat.svelte'
	import Flag from './Flag.svelte'
	import Fire from './Fire.svelte'
	import Lightning from './Lightning.svelte'
	export let data

	$: ({ name, picture, streak, totalXp, courses } = data)

	$: stats = [
		{
			icon: Fire,
			title: streak.toString(),
			description: 'Day streak'
		},
		{
			icon: Lightning,
			title: totalXp.toString(),
			description: 'Total XP'
		}
	]
</script>

<svelte:head>
	<title>{name}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Varela+Round&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<div class="upper">
		<img src={`${picture}/xlarge`} alt={name} />
		<div class="right">
			<div class="div">
				<h1 class="name">{name}</h1>
				<span class="username">{data.username}</span>
			</div>
			<div class="courses">
				{#each courses as { learningLanguage, title }}
					<Flag id={learningLanguage} label={title} />
				{/each}
			</div>
			<div class="stats">
				{#each stats as stat}
					<Stat {...stat} />
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	:global(:root) {
		font-family: 'Nunito Sans', sans-serif;
		font-optical-sizing: auto;
		font-style: normal;
		font-variation-settings:
			'wdth' 100,
			'YTLC' 500;
		line-height: 1.15;
	}
	main {
		color: #f2f9fb;
		background-color: #131e24;
		border-radius: 1rem;
		padding: 1rem;
	}
	img {
		background-color: #e5e5e5;
		border-radius: 50%;
	}
	.name {
		font-size: 1.75rem;
		line-height: 2.125rem;
	}
	.username {
		color: rgb(82, 101, 109);
		font-size: 1.063rem;
		font-weight: 500;
		line-height: 1.25rem;
	}

	.upper {
		display: flex;
		gap: 2rem;
	}
	.right {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.courses {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
</style>
