<script lang="ts">
	export let id: string
	export let label: string

	const flags: Record<string, string> = {
		zh: 'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/8537efd75f444d1d7dc21d8caf563f58.svg',
		es: 'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/40a9ce3dfafe484bced34cdc124a59e4.svg',
		ja: 'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/6d303af9f69038c1db4bffa52abdc997.svg'
	}
</script>

<img alt={label} src={flags[id]} />

<style>
	img {
		height: 1.5rem;
		width: 1.938rem;
	}
</style>
