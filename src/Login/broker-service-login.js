import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081'; 

const loginBroker = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/Broker/Login`,
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

export default loginBroker;
