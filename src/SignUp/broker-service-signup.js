import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081'; // Replace this with your backend URL

const brokerUp = (user) => {
  return axios.post(`${API_BASE_URL}/Broker/Signup`, user)
    .then((response) => response.data);
};

export default brokerUp ;
