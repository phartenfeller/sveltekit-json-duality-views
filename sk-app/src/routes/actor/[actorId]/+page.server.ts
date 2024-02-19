import { fetchDualityView, type DualityViewResponse } from '$lib/server/fetchDualityView';
import type { PageServerLoad } from './$types';

type Movie = {
	movie_id: number;
	person_id: number;
	role: string;
	title: string;
	year: number;
	movieId: number;
};

type ActorDetails = {
	_id: number;
	name: string;
	movies: Movie[];
};

function fetchActorDetails(actorId: number) {
	return fetchDualityView({
		viewName: 'actor_details_page_jdv',
		query: `{ "_id": {"$eq":${actorId}} }`
	}) as Promise<DualityViewResponse<ActorDetails>>;
}

export const load: PageServerLoad = async ({ params }) => {
	const actorId = parseInt(params.actorId);

	return {
		actor: (await fetchActorDetails(actorId)).items[0]
	};
};
