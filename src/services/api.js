// services/api.js

import axios from 'axios';

// Base URL for your API
const API_BASE_URL = 'https://randomuser.me/api/?page=1&results=1&seed=abc';

// Function to fetch user details
export const fetchUserDetails = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    const user = response.data.results[0];
    return {
      firstName: user.name.first,
      lastName: user.name.last,
      gender: user.gender,
      phoneNumber: user.phone,
      picture: user.picture.large,
    };
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
