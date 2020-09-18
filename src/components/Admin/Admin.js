import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import '../App/App.css';

class Admin extends Component {
	static defaultProps = {
		users: [],
	};
	static contextType = UserContext;

	renderAppUsers() {
		const { user } = this.context;
		return this.users.map((user) => {
			const { name, email, create_date } = user;
			return (
				<div className="user-row">
					<h3>{user.name}</h3>
					<p>{user.email}</p>
					{/* <p>
          `$
          {new Intl.DateTimeFormat("en-US").format(new Date(user.create_date))}`
        </p> */}
				</div>
			);
		});
	}

	render() {
		return (
			<>
				{this.renderAppUsers()}
				<div className="delete-user">
					<Link to="/admin">
						<p>Delete</p>
					</Link>
				</div>
			</>
		);
	}
}

export default Admin;
