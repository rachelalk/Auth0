import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/Components/App/index';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Auth0Provider
		domain="dev-7a80b6dr.us.auth0.com"
		clientId="DJpiS58bqVDKjMITtdK8aQtU39gqpELp"
		redirectUri={window.location.origin}
		//{"http://localhost:3000"}

		audience="https://dev-7a80b6dr.us.auth0.com/api/v2/"
		scope="read:current_user update:current_user_metadata"
	>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Auth0Provider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
