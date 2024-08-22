import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useUsers() {
	const { data, error } = useSWR(
		'http://localhost:3333/users/index',
		fetcher
	);

	return {
		users: data ? data : [],
		isLoading: !error && !data,
		isError: error,
	};
}

export function useUserById(id) {
	const { data, error } = useSWR(
		`http://localhost:3333/users/show/${id}`,
		fetcher
	);

	return {
		user: data ? data : [],
		isLoading: !error && !data,
		isError: error,
	};
}
