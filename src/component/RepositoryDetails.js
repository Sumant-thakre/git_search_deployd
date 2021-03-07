import "../App.css";
import { Card, Header, Button, Modal, Message } from "semantic-ui-react";
import { size } from "lodash";
import React, { useState } from "react";
import constants from "../constants";

const RepositoryDetails = (props) => {
	const [repoModalDetails, setRepoModalDetails] = useState(null);
	const [open, setOpen] = useState(false);
	const { name } = props.repositoryDetails;
	const repos = props.repos;
	const repoDetails = repos.map((repo) => {
		return (
			<Modal
				key={repo.id}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
				dimmer="blurring"
				trigger={
					<Card key={repo.id} onClick={() => setRepoModalDetails(repo)}>
						<Card.Content>
							<Card.Description>Repo Id : {repo.id}</Card.Description>
							<Card.Description>Repo Name : {repo.name}</Card.Description>
						</Card.Content>
					</Card>
				}
			>
				{repoModalDetails && (
					<>
						<Modal.Header>
							Repository Details: {repoModalDetails.name}
						</Modal.Header>
						<Modal.Content>
							<Modal.Description>
								<Header as="h4">Name : {repoModalDetails.name}</Header>
								<Header as="h4">ID : {repoModalDetails.id}</Header>
								<Header as="h4">
									Default Branch : {repoModalDetails.default_branch}
								</Header>
								<Header as="h4">
									Created at :{" "}
									{new Date(repoModalDetails.created_at).toDateString()}
								</Header>
								<Header as="h4">Size : {repoModalDetails.size}</Header>
								<Header as="h4">Forks : {repoModalDetails.forks}</Header>
								<Header as="h4">
									Open Issues : {repoModalDetails.open_issues_count}
								</Header>
								<Header as="h4">watchers : {repoModalDetails.watchers}</Header>
								<Header as="h4">
									url :{" "}
									<a href={repoModalDetails.url} target="new">
										{repoModalDetails.url}
									</a>
								</Header>
							</Modal.Description>
						</Modal.Content>
						<Modal.Actions>
							<Button onClick={() => setOpen(false)}>Close</Button>
						</Modal.Actions>
					</>
				)}
			</Modal>
		);
	});
	return (
		<>
			{size(repos) ? (
				<>
					<Header as="h2">{name.split(" ")[0]}'s Repositories</Header>
					<Card.Group>{repoDetails}</Card.Group>
				</>
			) : (
				<div className="noRepo">
					<div>
						<Message info>{constants.noRepoMessage}</Message>
					</div>
				</div>
			)}
		</>
	);
};

export default RepositoryDetails;
