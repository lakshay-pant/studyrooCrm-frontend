import axios from 'axios';
const addStudentUrl = 'http://localhost:3001/v1/students';

export const createNewStudent = (frmData) => {
	console.log('from api', frmData);
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
				'http://localhost:3001/v1/students/all-students'
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
				frmData
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
				'http://localhost:3001/v1/students/' + id
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
