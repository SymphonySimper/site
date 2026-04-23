<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	import * as v from 'valibot';

	import { DEFAULT_HEX_COLOR } from '$lib/constatants';

	const HexSchema = v.pipe(v.string(), v.hexColor());

	const color = $derived.by(() => {
		const result = v.safeParse(HexSchema, `#${page.params.hex ?? ''}`);

		if (!result.success) return null;

		return result.output;
	});

	$effect(() => {
		if (!color) goto(resolve('/color/[hex]', { hex: DEFAULT_HEX_COLOR }));
	});
</script>

{#if color}
	<div class="fixed inset-0" style:background={color}></div>
{/if}
