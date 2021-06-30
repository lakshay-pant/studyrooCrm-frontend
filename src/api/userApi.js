import axios from 'axios';
const loginUrl = 'http://localhost:3001/v1/user/login';
const signUpUrl = 'http://localhost:3001/v1/user';
const userProfileUrl = 'http://localhost:3001/v1/user';
const newAccessJWT = 'http://localhost:3001/v1/tokens';
const logoutUrl = 'http://localhost:3001/v1/user/logout';
const getAllUsers = 'http://localhost:3001/v1/user/all-users';

export const userSignUp = (frmData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.post(signUpUrl, frmData);

			resolve(res.data);
		} catch (error) {
			reject(error);
		}
	});
};

export const userLogin = (frmData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.post(loginUrl, frmData);

			resolve(res.data);

			if (res.data.status === 'success') {
				sessionStorage.setItem('accessJWT', res.data.accessJWT);
				localStorage.setItem(
					'crmSite',
					JSON.stringify({ refreshJWT: res.data.refreshJWT })
				);
			}
		} catch (error) {
			reject(error);
		}
	});
};

export const UpdateAllUser = (frmData, id) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.patch(
				'http://localhost:3001/v1/user/me',
				frmData,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);
			console.log('RESULT', result.data);
			resolve(result.data);
		} catch (error) {
			reject(error);
		}
	});
};

export const fetchNewAccessJWT = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const { refreshJWT } = JSON.parse(localStorage.getItem('crmSite'));

			if (!refreshJWT) {
				reject('Token not found!');
			}

			const res = await axios.get(newAccessJWT, {
				headers: {
					Authorization: refreshJWT,
				},
			});

			if (res.data.status === 'success') {
				sessionStorage.setItem('accessJWT', res.data.accessJWT);
			}

			resolve(true);
		} catch (error) {
			if (error.message === 'Request failed with status code 403') {
				localStorage.removeItem('crmSite');
			}

			reject(false);
		}
	});
};

export const fetchUser = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessJWT = sessionStorage.getItem('accessJWT');

			if (!accessJWT) {
				reject('Token not found!');
			}

			const res = await axios.get(userProfileUrl, {
				headers: {
					Authorization: accessJWT,
				},
			});

			resolve(res.data);
		} catch (error) {
			console.log(error);
			reject(error.message);
		}
	});
};

export const userLogout = async () => {
	try {
		await axios.delete(logoutUrl, {
			headers: {
				Authorization: sessionStorage.getItem('accessJWT'),
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const getAllUser = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get(getAllUsers);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};
