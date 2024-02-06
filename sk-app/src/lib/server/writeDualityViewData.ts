type WriteDualityViewDataArgs = {
	viewName: string;
	data: unknown;
	operation: 'POST' | 'PUT' | 'DELETE';
	itemId?: number;
};

export async function writeDualityViewData({
	viewName,
	data,
	operation,
	itemId
}: WriteDualityViewDataArgs) {
	const url = `https://apex23c.phartenfeller.de/ords/movies/${viewName}/${itemId ?? ''}`;

	const headers = new Headers();
	headers.set('Content-Type', 'application/json');

	const res = await fetch(url, { method: operation, body: JSON.stringify(data), headers });

	if (!res.ok) {
		throw new Error(`Failed to fetch ${url} - ${res.status} ${res.statusText}`);
	}

	return res.json();
}
