import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Header from '../../components/Header/Header';

class RegistrationRoute extends Component {
	static defaultProps = {
		history: {
			push: () => {},
		},
	};

	handleRegistrationSuccess = () => {
		const { history } = this.props;
		history.push('/login');
	};

	render() {
		return (
			<section className="container">
				<Header />
				<p className="tagline">
				Binaural beats use the power of auditory illusion to help you achieve altered states of consciousness
				</p>
				<h2>Sign Up</h2>
				<RegistrationForm
					onRegistrationSuccess={this.handleRegistrationSuccess}
				/>
			</section>
		);
	}
}

export default RegistrationRoute;
