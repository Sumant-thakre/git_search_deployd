import "../App.css";
import { Form, Message, Loader } from "semantic-ui-react";
import UserDetails from "../component/UserDetails";
import constants from "../constants";
import RepositoryDetails from "../component/RepositoryDetails";
import React, { useState } from "react";
import axios from "axios";

const SearchHome = () => {
	const [stateDetails, setStateDetails] = useState({
		id: 0,
		name: null,
		login: null,
		avatar_url: null,
		followers: 0,
		following: 0,
		bio: null,
		email: null,
	});
	const [repos, setRepos] = useState(null);
	const [userInput, setUserInput] = useState(null);
	const [error, setError] = useState(false);
	const [load, setLoad] = useState(false);
	const [disabled, setDisabled] = useState(true);

	const handleInput = (e) => {
		setDisabled(false);
		if (e.target.value === "") {
			setData({});
			error && setError(false);
			setDisabled(true);
		}
		setUserInput(e.target.value);
	};

	const handleClick = async () => {
		setLoad(true);
		await axios
			.get(`https://api.github.com/users/${userInput}`)
			.then(async (res) => {
				await axios.get(res.data.repos_url).then((res) => {
					setRepos(res.data);
				});
				setError(false);
				setData(res.data);
				setLoad(false);
			})
			.catch((error) => {
				setLoad(false);
				setError(true);
			});
	};

	const setData = (data) => {
		setStateDetails({
			...stateDetails,
			id: data.id,
			name: data.name,
			login: data.login,
			avatar_url: data.avatar_url,
			followere: data.followers,
			folloeing: data.following,
			bio: data.bio || constants.noSpecify,
			email: data.email || constants.noSpecify,
		});
	};

	return (
		<React.Fragment>
			<div className="searchForm">
				<Form>
					<Form.Group>
						<Form.Input
							focus
							placeholder={constants.gitHubUserName}
							name="gitHubUser"
							onChange={handleInput}
						/>
						<Form.Button
							primary
							color="grey"
							disabled={disabled}
							content="Search"
							onClick={handleClick}
						/>
					</Form.Group>
				</Form>
			</div>
			{disabled && (
				<div className="initialMessage">
					<Message compact info>
						{constants.welcome}
					</Message>
				</div>
			)}
			{load ? (
				<Loader active inline="centered" />
			) : error ? (
				<div className="errorBox">
					<Message compact>{constants.WrongUserName}</Message>
				</div>
			) : (
				stateDetails.id && (
					<div className="card">
						<div>
							<UserDetails userDetails={stateDetails} />
						</div>
						<div>
							{stateDetails.id && (
								<RepositoryDetails
									repositoryDetails={stateDetails}
									repos={repos}
								/>
							)}
						</div>
					</div>
				)
			)}
		</React.Fragment>
	);
};

export default SearchHome;
