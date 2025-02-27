export type TUser = {
  _id: string; 
  name: string;
  pin: string; 
  mobile: string; 
  balance: number; 
  email: string;
  accountType: "User" | "Agent" | "Request" | "Rejected" | "Admin"; 
  nid: string; 
  status: string; 
};
export type TLoginData = {
  identifier: string; 
  pin: string; 
};