<script lang="ts">
	import { enhance } from '$app/forms';

	const { data } = $props();

	let count = $state(data.count);
</script>

<div class="flex grow flex-col items-center justify-center gap-4">
	<form
		method="post"
		use:enhance={({ formData }) => {
			count = count + 1;

			formData.append('count', count.toString());

			return async ({ result }) => {
				if (result.type === 'success') {
					console.log('successfully inc');
				}
			};
		}}
	>
		<button type="submit" class="rounded-md bg-blue-500 px-4 py-2 text-white">inc {count}</button>
	</form>
</div>
