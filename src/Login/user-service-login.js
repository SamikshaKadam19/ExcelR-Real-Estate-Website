import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081'; 

const Login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/User/Login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error; 
  }
};



export default {
  Login
};
