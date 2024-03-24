<script lang="ts">
	import type { SvelteComponent } from 'svelte'

	export let title: string
	export let description: string
	export let icon: SvelteComponent | any
</script>

<div class="card">
	<div class="icon">
		<svelte:component this={icon} />
	</div>
	<div class="content">
		<span class="title">{title}</span>
		<span class="description">{description}</span>
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}
	.card {
		border: 2px solid rgb(55, 70, 79);
		border-radius: 16px;
		display: flex;
		gap: 1rem;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
		padding: 0.938rem 1.5rem;
	}
	.title {
		color: rgb(241, 247, 251);
		font-size: 1.25rem;
		margin-bottom: 0.25rem;
	}
	.description {
		color: rgb(82, 101, 109);
		font-size: 1rem;
	}
</style>
