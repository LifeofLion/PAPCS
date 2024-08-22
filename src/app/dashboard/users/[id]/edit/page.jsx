'use client';

import React from 'react';
import { useUserById } from '@/api/useUsers';
import { useRouter, useParams } from 'next/navigation';

export default function page() {
	const { id } = useParams();
	const { user, isLoading, isError } = useUserById(id);

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;
	console.log('Utilisateur:', user);

	return (
		<div>
			<p>{user.fullName}</p>
		</div>
	);
}
