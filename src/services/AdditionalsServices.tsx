/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API!;

const getAdditionals = () => {
  const promise = axios.get(`${BASE_URL}/additionals`);
  return promise;
};

export const additionalsServices = {
  getAdditionals,
};
