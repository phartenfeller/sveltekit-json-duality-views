<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-3">
	<h1 class="is-size-2 has-text-primary">Movies</h1>

	<table class="table">
		<thead class="thead">
			<tr class="tr">
				<th class="th">Title</th>
				<th class="th">Year</th>
				<th class="th">Rating</th>
			</tr>
		</thead>
		<tbody class="tbody">
			{#each data.movies as movie}
				<tr class="tr">
					<td class="td"><a href="/movie/{movie._id}">{movie.title}</a></td>
					<td class="td">{movie.year}</td>
					<td class="td">{movie.rating}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
