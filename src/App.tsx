import React, { useContext } from 'react'
import './GlobalStyles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import LoginPage from './Components/LoginPage/LoginPage'
import NavBar from './Components/NavBar/NavBar'
import { myContext } from './Context'

function App() {
	const userObject = useContext(myContext)
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					{userObject ? null : <Route path='/login' element={<LoginPage />} />}
				</Routes>
			</Router>
		</div>
	)
}

export default App
