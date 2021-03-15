import axios from "axios";
const addStudentUrl="http://localhost:3001/v1/students"



export const createNewStudent = (frmData) => {
  console.log("from api", frmData);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(addStudentUrl, frmData, {
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