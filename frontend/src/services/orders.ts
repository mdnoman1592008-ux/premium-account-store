import axios from "axios";

const API =
process.env.NEXT_PUBLIC_API_URL;

export const createOrder =
async (
  data:any,
  token:string
) => {
  return axios.post(
    `${API}/orders/create`,
    data,
    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }
  );
};

export const getMyOrders =
async (token:string) => {
  return axios.get(
    `${API}/orders/my-orders`,
    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }
  );
};

export const getAllOrders =
async (token:string) => {
  return axios.get(
    `${API}/orders/all`,
    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }
  );
};
