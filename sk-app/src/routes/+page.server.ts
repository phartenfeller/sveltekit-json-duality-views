import { fetchDualityView, type DualityViewResponse } from '$lib/server/fetchDualityView';
import type { PageServerLoad } from './$types';

type MovieData = {
	_id: number;
	title: string;
	year: number;
	rating: number;
};

function fetchAllMovies() {
	return fetchDualityView({ viewName: 'all_movies_jdv', limit: 250 }) as Promise<
		DualityViewResponse<MovieData>
	>;
}

export const load: PageServerLoad = async () => {
	return {
		movies: (await fetchAllMovies()).items
	};
};
