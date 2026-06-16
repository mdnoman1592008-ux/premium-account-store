import axios from "axios";

const API =
process.env.NEXT_PUBLIC_API_URL;

export const getApps =
async () => {
  return axios.get(
    `${API}/apps`
  );
};

export const getApp =
async (id:string) => {
  return axios.get(
    `${API}/apps/${id}`
  );
};

export const createApp =
async (
  data:any,
  token:string
) => {
  return axios.post(
    `${API}/apps`,
    data,
    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }
  );
};
