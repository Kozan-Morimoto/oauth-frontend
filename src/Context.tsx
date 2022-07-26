import React, { createContext, useEffect, useState } from 'react'
import Axios, { AxiosResponse } from 'axios'

export const myContext = createContext({})
function Context(props: any) {
	const [userObject, setUserObject] = useState<any>()

	useEffect(() => {
		Axios.get('http://localhost:4000/getUser', { withCredentials: true }).then(
			(res: AxiosResponse) => {
				if (res.data) {
					setUserObject(res.data)
				}
			}
		)
	}, [])
	return (
		<myContext.Provider value={userObject}>{props.children}</myContext.Provider>
	)
}

export default Context
