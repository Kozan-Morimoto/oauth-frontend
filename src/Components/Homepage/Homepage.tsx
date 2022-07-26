import React, { useContext } from 'react'
import { myContext } from '../../Context'
import { IUser } from '../../types/maintypes'

function Homepage() {
	const context = useContext(myContext) as IUser
	if (context) console.log(context.username);
	return (
		<div>
			{context ? (
				<h1>Welcome back {context.username}</h1>
			) : (
				<h1>Welcome to my website</h1>
			)}
		</div>
	)
}

export default Homepage
