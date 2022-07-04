
import './App.css';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';
import { useEffect } from 'react';




function App() {



  return (
		<div className="App">
			<header className="App-header">
				<h1> Login for a fox fix </h1>
				<div className="main">
					<div className="login-logout-container">
						<LoginButton></LoginButton>
						<LogoutButton></LogoutButton>
					</div>
					<Profile></Profile>
				</div>
			</header>
		</div>
	);
}

export default App;
