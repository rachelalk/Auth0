import "./App.css";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Yasar & Rachel's super login page</p>
				<LoginButton></LoginButton>
				<LogoutButton></LogoutButton>
				<Profile></Profile>
			</header>
		</div>
	);
}

export default App;
