import React from 'react'
import googleImage from '../../assets/googleImage.png'
import githubImage from '../../assets/githubImage.png'
import styles from './LoginPage.module.css' // CSS files aren't shared across multiple files this way.

function LoginPage() {
	const googleLogin = () => {
		window.open('http://localhost:4000/auth/google', '_self')
	}
	const githubLogin = () => {
		window.open('http://localhost:4000/auth/github', '_self')
	}
	return (
		<div className={styles.loginPage}>
			<div className={styles.loginForm}>
				<h1>Login Page</h1>

				<div className={styles.googleContainer} onClick={googleLogin}>
					<img src={googleImage} alt='Google Icon' />
					<p>Login with Google</p>
				</div>

				<div
					className={`${styles.googleContainer} ${styles.githubContainer}`}
					onClick={githubLogin}
				>
					<img src={githubImage} alt='Github Icon' />
					<p>Login With Github</p>
				</div>

			</div>
		</div>
	)
}

export default LoginPage
