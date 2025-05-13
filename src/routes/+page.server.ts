import { error } from '@sveltejs/kit';

export const load = async (event) => {
	const { platform } = event;

	if (!platform) {
		return error(500, 'platform not available...');
	}

	const curCount = await platform.env.SVELTEFLARE_KV.get('demo_count');

	if (!curCount) {
		await platform.env.SVELTEFLARE_KV.put('demo_count', '0');

		return {
			count: 0
		};
	}

	return {
		count: parseInt(curCount)
	};
};

export const actions = {
	default: async (event) => {
		const { platform } = event;

		if (!platform) {
			return error(500, 'platform not available...');
		}

		const formData = await event.request.formData();
		const count = formData.get('count');

		console.log(count);

		if (!count) {
			return error(500, 'no count found...');
		}

		await platform.env.SVELTEFLARE_KV.put('demo_count', count.toString());

		return {
			count: parseInt(count.toString())
		};
	}
};
