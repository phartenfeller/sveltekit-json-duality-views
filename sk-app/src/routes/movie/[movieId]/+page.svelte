<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-3">
	<h1 class="is-size-2 has-text-primary">{data.movie.title} ({data.movie.year})</h1>

	<p class="my-3">{data.movie.description}</p>

	<table class="table">
		<thead class="thead">
			<tr class="tr">
				<th class="th">Actor</th>
				<th class="th">Role</th>
			</tr>
		</thead>
		<tbody class="tbody">
			{#each data.movie.cast as c}
				<tr class="tr">
					<td class="td"><a href="/actor/{c.personId}">{c.name}</a></td>
					<td class="td">{c.role}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div style="width: 50%">
		<h2 class="is-size-3">Comments</h2>
		{#each data.movie.comments as comment}
			<div class="box">
				<p>{comment.comment}</p>
				<p class="is-size-7 has-text-grey">{comment.username}</p>
			</div>
		{/each}
		<form method="post">
			<div class="field">
				<label class="label" for="username">Username</label>
				<div class="control">
					<input type="text" name="username" class="input" />
				</div>
			</div>
			<div class="field">
				<label class="label" for="comment">Comment</label>
				<div class="control">
					<textarea name="comment" class="textarea" rows="3"></textarea>
				</div>
			</div>
			<div>
				<button class="button is-primary" type="submit" formaction="?/addComment">Submit</button>
			</div>
		</form>
	</div>
</div>
