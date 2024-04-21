import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace this with your backend URL

const signUp = async (user) => {
  console.log(user);
  return await axios.post(`${API_BASE_URL}/User/Signup`, user)
    .then((response) => response.data);
};

export default { signUp };
