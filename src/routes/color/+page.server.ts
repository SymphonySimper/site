import { resolve } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { DEFAULT_HEX_COLOR } from '$lib/constatants';

export const load: PageServerLoad = () => {
	redirect(307, resolve('/color/[hex]', { hex: DEFAULT_HEX_COLOR }));
};
