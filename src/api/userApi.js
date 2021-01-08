import axios from "axios"
const loginUrl="http://localhost:3001/v1/user/login"
const signUpUrl="http://localhost:3001/v1/user"

export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(loginUrl, frmData);
  
        resolve(res.data);
  
        if (res.data.status === "success") {
          sessionStorage.setItem("accessJWT", res.data.accessJWT);
          localStorage.setItem(
            "crmSite",
            JSON.stringify({ refreshJWT: res.data.refreshJWT })
          );
        }
      } catch (error) {
        reject(error);
      }
    });
  };
 
export const userSignUp = (frmData) => {
    return new Promise(async(resolve, reject) => {
      try {
        const res = await axios.post(signUpUrl, frmData);
  
        resolve(res.data);
  
        
      } catch (error) {
        reject(error);
      }
    });
  };
 