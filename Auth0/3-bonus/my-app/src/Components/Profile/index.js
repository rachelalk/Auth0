import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import FoxImage from "../FoxImage";

const Profile = () => {
	

	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		isAuthenticated &&   (
			<div className="user-div">
				<img className="user-icon" src={user.picture} alt={user.name} />
				<h2>Welcome {user.name}</h2>
				<FoxImage></FoxImage>
			</div>
		)
	);
};

export default Profile;
