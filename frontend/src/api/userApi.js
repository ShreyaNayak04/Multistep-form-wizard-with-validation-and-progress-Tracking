import axios from "axios";

const BASE_URL = "http://localhost:2020/api/users";

export const saveUser = (userData, profileImage) => {
  const formData = new FormData();
  
  // Add user data as JSON string
  formData.append('user', JSON.stringify(userData));
  
  // Add profile image file
  if (profileImage) {
    formData.append('file', profileImage);
  } else {
    // Send a dummy file if no image is uploaded
    formData.append('file', new Blob(), 'dummy.txt');
  }
  
  return axios.post(BASE_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
