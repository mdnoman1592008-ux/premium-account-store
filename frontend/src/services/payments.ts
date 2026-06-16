import axios from "axios";

const API =
process.env.NEXT_PUBLIC_API_URL;

export const submitPayment =
async (
  formData:FormData,
  token:string
) => {
  return axios.post(
    `${API}/payments/submit`,
    formData,
    {
      headers:{
        Authorization:
        `Bearer ${token}`,
        "Content-Type":
        "multipart/form-data"
      }
    }
  );
};

export const getPayments =
async (token:string) => {
  return axios.get(
    `${API}/payments/all`,
    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }
  );
};

export const approvePayment =
async (
  id:string,
  token:string
) => {
  return axios.put(
    `${API}/payments/approve/${id}`,
    {},
    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }
  );
};

export const rejectPayment =
async (
  id:string,
  token:string
) => {
  return axios.put(
    `${API}/payments/reject/${id}`,
    {},
    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }
  );
};
