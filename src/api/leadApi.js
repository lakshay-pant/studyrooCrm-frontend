import axios from "axios";
const addLeadUrl="http://localhost:3001/v1/leads"



export const createNewLead = (frmData) => {
  console.log("from api", frmData);
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(addLeadUrl, frmData, {
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

export const getAllUserLeads = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/leads/all-leads");

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};