import { fetchDualityView, type DualityViewResponse } from '$lib/server/fetchDualityView';
import { writeDualityViewData } from '$lib/server/writeDualityViewData';
import type { Actions, PageServerLoad } from './$types';

type Cast = {
	movieId: number;
	personId: number;
	role: string;
	personId2: number;
	name: string;
};

type Comment = {
	commentId: number;
	username: string;
	comment: string;
};

type MovieDetails = {
	_id: number;
	title: string;
	description: string;
	year: number;
	runtime: number;
	rating: number;
	cast: Cast[];
	comments: Comment[];
};

function fetchMovieDetails(movieId: number) {
	return fetchDualityView({
		viewName: 'movie_details_page_jdv',
		query: `{ "_id": {"$eq":${movieId}} }`
	}) as Promise<DualityViewResponse<MovieDetails>>;
}

export const load: PageServerLoad = async ({ params }) => {
	const movieId = parseInt(params.movieId);

	return {
		movie: (await fetchMovieDetails(movieId)).items[0]
	};
};

export const actions: Actions = {
	addComment: async ({ params, request }) => {
		const movieId = parseInt(params.movieId);
		const data = await request.formData();

		const username = data.get('username') as string;
		const comment = data.get('comment') as string;
		if (!username || !comment) {
			throw new Error('Missing username or comment');
		}

		const movieData = (await fetchMovieDetails(movieId)).items[0];
		movieData.comments.push({
			commentId: null as unknown as number,
			username,
			comment
		});

		console.log('movieData:', JSON.stringify(movieData, null, 2));

		await writeDualityViewData({
			viewName: 'movie_details_page_jdv',
			data: movieData,
			operation: 'PUT',
			itemId: movieId
		});
	}
};
