import api from
"../lib/axios";

export const
approvePayment =
(id:string)=>{

  return api.put(
    `/payment-verification/approve/${id}`
  );

};

export const
rejectPayment =
(id:string)=>{

  return api.put(
    `/payment-verification/reject/${id}`
  );

};
