import "../App.css";
import { Form, Message, Loader } from "semantic-ui-react";
import UserDetails from "../component/UserDetails";
import constants from "../constants";
import RepositoryDetails from "../component/RepositoryDetails";
import React, { useState } from "react";
import axios from "axios";

const SearchHome = () => {
	const [name, setName] = useState(null);
	const [login, setLogin] = useState(null);
	const [avatar_url, setAvatar] = useState(null);
	const [followers, setFollowers] = useState(null);
	const [following, setFollowings] = useState(null);
	const [repos, setRepos] = useState(null);
	const [bio, setBio] = useState(null);
	const [email, setEmail] = useState(null);
	const [userInput, setUserInput] = useState(null);
	const [error, setError] = useState(false);
	const [load, setLoad] = useState(false);
	const [disabled, setDisabled] = useState(true);

	const handleInput = (e) => {
		setDisabled(false);
		if (e.target.value === "") {
			setData([]);
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

	const setData = ({
		name,
		avatar_url,
		login,
		bio,
		email,
		followers,
		following,
	}) => {
		setName(name);
		setAvatar(avatar_url);
		setLogin(login);
		bio ? setBio(bio) : setBio(constants.noSpecify);
		email ? setEmail(email) : setEmail(constants.noSpecify);
		setFollowers(followers);
		setFollowings(following);
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
				login && (
					<div className="card">
						<UserDetails
							userDetails={{
								name,
								login,
								avatar_url,
								followers,
								following,
								email,
								bio,
							}}
						/>
						<div>
							{name && (
								<RepositoryDetails repositoryDetails={{ name, repos }} />
							)}
						</div>
					</div>
				)
			)}
		</React.Fragment>
	);
};

export default SearchHome;
