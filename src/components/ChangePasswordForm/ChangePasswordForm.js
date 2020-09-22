import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import UserApiService from '../../services/user-api-service';
import Button from '../Button/Button';
import '../App/App.css';
import UserContext from '../../contexts/UserContext';

export default class ChangePasswordForm extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};

	static contextType = UserContext;

	state = { error: null };

	handlePassUpdate = (event) =>
		this.setState({
			[event.target.name]: event.target.value,
		});

	updatePassInfo = (e) => {
		e.preventDefault();
		const userId = this.context.user.id;
		const { password } = e.target;

		this.setState({ error: null });

		UserApiService.updateUserPassword(userId, {
			password: password.value,
		});
		this.handleLogoutClick();
	};

	handleLogoutClick = () => {
		this.context.processLogout();
		const { location, history } = this.props;
		const destination = (location.state || {}).from || '/login';
		history.push(destination);
	};

	render() {
		const { error } = this.state;
		return (
			<form className="ChangePasswordForm" onSubmit={this.updatePassInfo}>
				<div role="alert">{error && <p>{error}</p>}</div>
				<div>
					<Label htmlFor="change-password-input" hidden>
						Change Password
					</Label>
					<Input
						id="change-password-input"
						name="password"
						type="password"
						placeholder="New Password"
						onChange={this.handlePassUpdate}
						required
					/>
				</div>

				<Button type="submit">Save Password</Button>
			</form>
		);
	}
}
