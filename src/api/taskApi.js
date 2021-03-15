import axios from "axios";
const addTaskUrl="http://localhost:3001/v1/tasks"



export const createNewTask = (frmData) => {
  console.log("from api", frmData);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(addTaskUrl, frmData, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};