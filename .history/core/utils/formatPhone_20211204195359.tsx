export const formatPhone : (phone:string)=> string = (phone:string) => {
    const phoneAfter =  `+1 ${phone.substring(0,3)}-${phone.substring(3,6)}-${phone.substring(6)}`;
   return phoneAfter

 }