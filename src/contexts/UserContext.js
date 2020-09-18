import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';

const UserContext = React.createContext({
	users: [],
	admin: false,
	error: null,
	create_date: '',
	setError: () => {},
	clearError: () => {},
	setUsersList: () => {},
	setUser: () => {},
	processLogin: () => {},
	processLogout: () => {},
	deleteUser: () => {},
});

export default UserContext;

export class UserProvider extends Component {
	constructor(props) {
		super(props);
		const state = { user: {}, admin: false, error: null };

		const jwtPayload = TokenService.parseAuthToken();

		if (jwtPayload)
			state.user = {
				id: jwtPayload.user_id,
				name: jwtPayload.name,
				email: jwtPayload.sub,
				admin: jwtPayload.admin,
				create_date: jwtPayload.create_date,
			};

		this.state = state;
		IdleService.setIdleCallback(this.logoutBecauseIdle);
	}

	componentDidMount() {
		if (TokenService.hasAuthToken()) {
			IdleService.registerIdleTimerResets();
			TokenService.queueCallbackBeforeExpiry(() => {
				this.fetchRefreshToken();
			});
		}
	}

	componentWillUnmount() {
		IdleService.unRegisterIdleResets();
		TokenService.clearCallbackBeforeExpiry();
	}

	setError = (error) => {
		console.error(error);
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	setUser = (user) => {
		this.setState({ user });
	};
	//setUsersList for pulling users into AdminRoute as list view
	setUsersList = (users) => {
		this.setState({ users });
	};

	deleteUser = (userId) => {
		this.setState({
			users: this.state.users.filter((user) => user.id !== userId),
		});
		this.componentDidMount();
	};

	processLogin = (authToken) => {
		TokenService.saveAuthToken(authToken);
		const jwtPayload = TokenService.parseAuthToken();
		this.setUser({
			id: jwtPayload.user_id,
			name: jwtPayload.name,
			email: jwtPayload.sub,
			admin: jwtPayload.admin,
		});
		IdleService.registerIdleTimerResets();
		TokenService.queueCallbackBeforeExpiry(() => {
			this.fetchRefreshToken();
		});
	};

	processLogout = () => {
		TokenService.clearAuthToken();
		TokenService.clearCallbackBeforeExpiry();
		IdleService.unRegisterIdleResets();
		this.setUser({});
	};

	logoutBecauseIdle = () => {
		TokenService.clearAuthToken();
		TokenService.clearCallbackBeforeExpiry();
		IdleService.unRegisterIdleResets();
		this.setUser({ idle: true });
	};

	fetchRefreshToken = () => {
		AuthApiService.refreshToken()
			.then((res) => {
				TokenService.saveAuthToken(res.authToken);
				TokenService.queueCallbackBeforeExpiry(() => {
					this.fetchRefreshToken();
				});
			})
			.catch((err) => {
				this.setError(err);
			});
	};

	handleLogoutClick = () => {
		this.context.processLogout();
	};

	render() {
		const value = {
			user: this.state.user,
			users: this.state.users,
			error: this.state.error,
			admin: this.state.admin,
			create_date: this.state.create_date,
			setError: this.setError,
			clearError: this.clearError,
			setUser: this.setUser,
			deleteUser: this.deleteUser,
			setUsersList: this.setUsersList,
			processLogin: this.processLogin,
			processLogout: this.processLogout,
			handleLogoutClick: this.handleLogoutClick,
		};
		return (
			<UserContext.Provider value={value}>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}
