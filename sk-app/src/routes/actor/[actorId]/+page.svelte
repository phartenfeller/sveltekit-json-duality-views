<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-3">
	<h1 class="is-size-2 has-text-primary">{data.actor.name}</h1>

	<table class="table">
		<thead class="thead">
			<tr class="tr">
				<th class="th">Movie</th>
				<th class="th">Role</th>
			</tr>
		</thead>
		<tbody class="tbody">
			{#each data.actor.movies as m}
				<tr class="tr">
					<td class="td"><a href="/movie/{m.movieId}">{m.title} ({m.year})</a></td>
					<td class="td">{m.role}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
