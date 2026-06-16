import api from
"../lib/axios";

export const
getMyAccounts =
()=>{

  return api.get(
    "/accounts/my"
  );

};

export const
getAccountDetails =
(id:string)=>{

  return api.get(
    `/accounts/${id}`
  );

};
