import "./App.css";
import github from "./github.webp";
import constants from "./constants";
import { Image, Header } from "semantic-ui-react";
import React from "react";
import SearchHome from "./container/SearchHome";

function App() {
	return (
		<div className="App">
			<div className="navbar">
				<Header as="h2">
					<Image circular src={github} /> {constants.githubSearch}
				</Header>
			</div>
			<SearchHome />
		</div>
	);
}

export default App;
