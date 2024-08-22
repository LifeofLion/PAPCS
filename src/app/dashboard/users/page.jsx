'use client';
import React from 'react';
import { useUsers } from '@/api/useUsers';
import Link from 'next/link';

export default function page() {
	const { users, isLoading, isError } = useUsers();

	const userArray = Object.values(users);
	userArray.sort((a, b) => a.id - b.id);

	return (
		<>
			<div className='navbar bg-base-100'>
				<div className='flex-1'>
					<a className='btn btn-ghost text-xl'>daisyUI</a>
				</div>
				<div className='flex-none'>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<a>Link</a>
						</li>
						<li>
							<details>
								<summary>Parent</summary>
								<ul className='bg-base-100 rounded-t-none p-2'>
									<li>
										<a>Link 1</a>
									</li>
									<li>
										<a>Link 2</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className='text-xl text-[#F29D35]'>
							<th>id</th>
							<th>Name</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{userArray.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.fullName}</td>
								<td>{user.email}</td>
								<Link href={`/dashboard/users/${user.id}/edit`}>
									<button className='btn btn-primary m-2'>
										Edit
									</button>
								</Link>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
