/*
 *  ==============================
 *  Here we are using interface for fetcing customer 
 *  ==============================
 */
export interface IGetCustomerProps {
    name: string;
    username: string;
    phone: string;
    address: {city:string,street:string,suite:string};
    company: {catchPhrase:string,bs:string,name:string};
    email: string;
    website: string;
    id:string;
  }