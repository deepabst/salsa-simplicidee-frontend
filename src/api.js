import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getGreeting = async () => {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
};
