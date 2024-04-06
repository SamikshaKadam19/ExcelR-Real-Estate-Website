import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081'; // Replace this with your backend URL

const signUp = (user) => {
  return axios.post(`${API_BASE_URL}/User/Signup`, user)
    .then((response) => response.data);
};

export default { signUp };
