type FetchDualityView = {
	viewName: string;
	query?: string;
	limit?: number;
	offset?: number;
};

export async function fetchDualityView({ viewName, query = '', limit, offset }: FetchDualityView) {
	const urlParams = new URLSearchParams();
	if (query) {
		urlParams.set('q', query);
	}
	if (limit) {
		urlParams.set('limit', limit.toString());
	}
	if (offset) {
		urlParams.set('offset', offset.toString());
	}

	const url = `https://apex23c.phartenfeller.de/ords/movies/${viewName}?${urlParams.toString()}`;

	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Failed to fetch ${url}`);
	}

	return res.json();
}

type Metadata = {
	etag: string;
	asof: string;
};

type Link = {
	rel: string;
	href: string;
};

export type DualityViewResponse<T> = {
	items: (T & { _metadata: Metadata; links: Link[] })[];
	hasMore: boolean;
	limit: number;
	offset: number;
	count: number;
	links: Link[];
};
