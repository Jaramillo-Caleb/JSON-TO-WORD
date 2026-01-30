import axios from 'axios';

const API_URL = '/api/convert/all'

export const convertJsonToWord = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};