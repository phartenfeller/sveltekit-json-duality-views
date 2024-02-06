import {
	fetchDualityView,
	type DualityViewResponse,
	type Link,
	type Metadata
} from '$lib/server/fetchDualityView';
import type { PageServerLoad } from './$types';

type MovieData = {
	_id: number;
	title: string;
	year: number;
	rating: number;
	_metadata: Metadata;
	links: Link[];
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
