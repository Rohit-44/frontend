export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const baseURL = 'https://relieved-tiara-ant.cyclic.app'; // Replace with your backend's hosted URL
