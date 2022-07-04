import { useState, useEffect } from "react";

const FoxImage = () => {
	const [fox, setFox] = useState("https://randomfox.ca/floof/");
	const [foxCount, setFoxCount] = useState(0);

	function newFox() {
		setFoxCount(foxCount + 1);
	}

	useEffect(() => {
		const API = "https://randomfox.ca/floof/";
		async function fetchMyAPI() {
			let promise = await fetch(API);
			let response = await promise.json();
			setFox(response);
		}
		fetchMyAPI();
		console.log(fox);
	}, [foxCount]);


		return (
			<div className="fox-div">
				<img src={fox.image} alt="fox"></img>
				<button className="button" onClick={newFox}>
					New Fox
				</button>
			</div>
		);

};

export default FoxImage;
