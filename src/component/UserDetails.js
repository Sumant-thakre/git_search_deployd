import "../App.css";
import { Card, Image, Icon } from "semantic-ui-react";
import React from "react";

const UserDetails = (props) => {
	const {
		name,
		login,
		avatar_url,
		followers,
		following,
		email,
		bio,
	} = props.userDetails;
	return (
		<div>
			<Card>
				<Image src={avatar_url} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{name}</Card.Header>
					<Card.Description>
						<span>Username : {login}</span>
					</Card.Description>
					<Card.Description>
						<span>Email : {email}</span>
					</Card.Description>
					<Card.Description>Bio: {bio}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Icon name="user" />
					{followers} Followers |
					<Icon name="user" />
					{following} Followings
				</Card.Content>
			</Card>
		</div>
	);
};

export default UserDetails;
