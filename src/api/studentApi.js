import axios from 'axios';
const addStudentUrl = 'http://localhost:3001/v1/students';

export const createNewStudent = (frmData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(addStudentUrl, frmData, {
				headers: {
					Authorization: sessionStorage.getItem('accessJWT'),
				},
			});

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const getAllStudents = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get('http://localhost:3001/v1/students', {
				headers: {
					Authorization: sessionStorage.getItem('accessJWT'),
				},
			});

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};

export const getAllUserStudents = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get(
				'http://localhost:3001/v1/students/all-students',
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result);
		} catch (error) {
			reject(error);
		}
	});
};

export const UpdateAllUserStudents = (frmData, id) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.patch(
				'http://localhost:3001/v1/students/' + id,
				frmData,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const DeleteAllUserStudents = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'http://localhost:3001/v1/students/' + id,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const addStudentTask = (frmData, id) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.put(
				'http://localhost:3001/v1/students/' + id,
				frmData,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const DeleteAllUserStudentTask = (id1, id2) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'http://localhost:3001/v1/students/' + id1 + '/' + id2,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};

export const UpdateStudentTask = (frmData, id1, id2) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.put(
				'http://localhost:3001/v1/students/' + id1 + '/' + id2,
				frmData,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);

			resolve(result.data);
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};
