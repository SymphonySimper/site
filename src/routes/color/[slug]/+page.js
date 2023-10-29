/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const color = params.slug;
	let hex;

	switch (color) {
		case 'white':
			hex = 'fff';
			break;
		case 'black':
			hex = '000';
			break;
		default:
			switch (color.length) {
				case 3:
				case 6:
					hex = color;
					break;
				default:
					hex = undefined;
					break;
			}
			break;
	}

	return { hex };
}
