import React, { useContext } from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import Axios, { AxiosResponse } from 'axios'
import { myContext } from '../../Context'
import { IUser } from '../../types/maintypes'

function NavBar() {
	const userObject = useContext(myContext) as IUser

	const logout = () => {
		Axios.get('http://localhost:4000/auth/logout', {
			withCredentials: true,
		}).then((res: AxiosResponse) => {
			if (res.data === 'done') {
				window.location.href = '/'
			}
		})
	}
	return (
		<div className={styles.navBarWrapper}>
			<ul className={styles.navBar}>
				<li>
					<Link to='/'>Home</Link>
				</li>

				{userObject ? (
					<li onClick={logout}>Logout</li>
				) : (
					<li>
						<Link to='/login'>Login</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

export default NavBar
