export type TUser = {
  name: string;
  pin: string; 
  mobile: string; 
  balance: number; 
  email: string;
  accountType: "User" | "Agent"; 
  nid: string; 
};
export type TLoginData = {
  identifier: string; 
  pin: string; 
};