import axios from 'axios';
const addTaskUrl = 'http://localhost:3001/v1/tasks';

export const getAlltask = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.get('http://localhost:3001/v1/tasks/ge', {
				headers: {
					Authorization: sessionStorage.getItem('accessJWT'),
				},
			});

			resolve(result);
			console.log('resultresultresultresultresult', result);
		} catch (error) {
			console.log('errorerrorerrorerror', error);

			reject(error);
		}
	});
};
export const createNewTask = (frmData) => {
	console.log('from api', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(addTaskUrl, frmData, {
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

export const UpdateAllTask = (frmData, id) => {
	console.log('from apiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', frmData);
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.patch(
				'http://localhost:3001/v1/tasks/' + id,
				frmData,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);
			console.log('RESULT', result);
			resolve(result.data);
		} catch (error) {
			reject(error);
		}
	});
};

export const DeleteAlltasks = (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.delete(
				'http://localhost:3001/v1/tasks/' + id,
				{
					headers: {
						Authorization: sessionStorage.getItem('accessJWT'),
					},
				}
			);
			console.log('RESULT', result);
			resolve(result.data);
		} catch (error) {
			console.log('i am in error ', error.message);
			reject(error);
		}
	});
};
