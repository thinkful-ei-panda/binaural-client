import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import '../../../src/index.css';
import UserApiService from '../../services/user-api-service';

export default class UserInfo extends Component {
	static defaultProps = {
		onDeleteUser: () => {},
	};

	static contextType = UserContext;

	handleClickDelete = (e) => {
		e.preventDefault();
		const { id } = e.target;
		UserApiService.deleteUserById(id)
			.then(() => {
				this.context.deleteUser(id);
				this.props.onDeleteUser(id);
			})
			.catch((error) => {
				console.error({ error });
			});
	};

	render() {
		const { user } = this.props;

		return (
			<>
				<li>
					<h4>{user.name}</h4>
					<p>{user.email}</p>
					<p>
						{new Intl.DateTimeFormat('en-US').format(
							new Date(user.create_date)
						)}
					</p>
					<Button
						className="delete-user"
						id={user.id}
						type="button"
						onClick={this.handleClickDelete}
					>
						delete
					</Button>
				</li>
			</>
		);
	}
}
