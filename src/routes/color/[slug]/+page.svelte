<script>
	export let data;
</script>

{#if data.hex}
	<div class="h-screen" style={`background: #${data.hex}`} />
{:else}
	<h1 class="flex h-screen items-center justify-center font-mono">Not a proper hex</h1>
{/if}
