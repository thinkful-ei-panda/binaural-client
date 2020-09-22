import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm';

class ChangePasswordRoute extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};

	static contextType = UserContext;

	handlePasswordChangeSuccess = () => {
		const { history } = this.props;
		history.push('/login');
	};

	handleLogoutClick = () => {
		this.context.processLogout();
	};

	renderLogoutLink() {
		const { user } = this.context;
		return (
			<div>
				<span>Logged in as {user.name}</span>
				<nav>
					<Link onClick={this.handleLogoutClick} to="/login">
						Logout
					</Link>
				</nav>
			</div>
		);
	}

	render() {
		return (
			<section>
				<p>
					Binaural beats use the power of auditory illusion to help you achieve
					altered states of consciousness
				</p>
				{this.renderLogoutLink()}
				<h2>Change Password</h2>
				<ChangePasswordForm
					onPasswordChangeSuccess={this.handlePasswordChangeSuccess}
				/>
			</section>
		);
	}
}

export default ChangePasswordRoute;
