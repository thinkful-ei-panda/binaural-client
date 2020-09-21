import config from '../config';
import TokenService from '../services/token-service';

const UserApiService = {
	//ADMIN GET ALL USERS
	getUsers() {
		return fetch(`${config.API_ENDPOINT}/api/user`, {
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	// getUser() {
	//   return fetch(`${config.API_ENDPOINT}/api/admin/:id`, {
	//     headers: {
	//       Authorization: `Bearer ${TokenService.getAuthToken()}`,
	//     },
	//   }).then((res) =>
	//     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
	//   );
	// },

	//REGISTER NEW USER
	postUser(user) {
		return fetch(`${config.API_ENDPOINT}/api/user`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify(user),
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},

	// TO UPDATE PASSWORD ON USER PROFILE - ChangePasswordForm.js
	async updateUserPassword(user_id, user) {
		const res = await fetch(`${config.API_ENDPOINT}/api/user/${user_id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify(user),
		});
		if (res.status === 204) {
			return {};
		} else {
			const json = await res.json();
			return { error: json.error };
		}
	},
	// =======
	// 		}).then((res) =>
	// 			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
	// 		);
	// },
	//ADMIN DELETE USER
	deleteUserById(userId) {
		return fetch(`${config.API_ENDPOINT}/api/user/${userId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${TokenService.getAuthToken()}`,
			},
			// }).then((res) =>
			// 	!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
			// );
		});
	},
};

export default UserApiService;
