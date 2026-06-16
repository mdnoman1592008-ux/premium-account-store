import axios from "axios";

const API =
process.env.NEXT_PUBLIC_API_URL;

export const registerUser =
async (data:any) => {
  return axios.post(
    `${API}/auth/register`,
    data
  );
};

export const loginUser =
async (data:any) => {
  return axios.post(
    `${API}/auth/login`,
    data
  );
};

export const getProfile =
async (token:string) => {
  return axios.get(
    `${API}/auth/profile`,
    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }
  );
};
