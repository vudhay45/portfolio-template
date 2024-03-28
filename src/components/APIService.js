import axios from 'axios';

const API_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';

export const getUserData = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.data.success) {
      return response.data.user;
    } else {
      throw new Error('API call was not successful');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
